<?php

namespace App\Controller;

use App\Entity\GameServer;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class GameController extends AbstractController
{
  /**
   * @Route("/play", name="game_list")
   * @IsGranted("ROLE_USER")
   */
  public function gameList()
  {
    // Récupère toutes les parties en cours de la BDD
    $games = $this->getDoctrine()->getRepository(GameServer::class)->findAll();

    return $this->render('game/gamelist.html.twig', [
      'games' => $games
    ]);
  }


  /**
   * @Route("/game/create", name="game_create")
   * @IsGranted("ROLE_USER")
   */
  public function gameCreate(Connection $connection)
  { 
    // Vérifie si le dossier logs-node est existant, sinon le créé avec les droits associés
    if (!is_dir("/var/www/logs_node")) {
      mkdir("/var/www/logs_node", 0777, true);
    }
    
    // Créé un identificateur en micro-secondes
    $timestamp = microtime(true) * 1000;

    // Créer un tableau en dur pour récupérer l'ensemble des ports
    $all_ports = range(6000, 7000);

    // Récupération via la BDD des ports utilisés
    $used_ports = $connection->fetchAll('SELECT port FROM game_server');
    $databasePorts = [];
    // Insère les données dans un tableau d'integer
    foreach ($used_ports as $array) {
      $databasePorts[] = (int) $array['port'];
    }

    // Compare et range dans l'ordre les ports disponibles
    $available_ports = array_diff($all_ports, $databasePorts);
    sort($available_ports);

    // Choisit le premier port disponible dans la BDD
    $port = $available_ports[0]; // <== 6000

    // Récupère l'utilisateur connecté via son pseudo
    $username = $this->getUser()->getNickname();

    // if (!@fsockopen('localhost', $port)) { // @change dev
    if (!@fsockopen('54.89.22.26', $port)) {

      // Insère en BDD l'utilisateur et le port choisi
      $newGame = new GameServer();
      $newGame->setPort($port);
      $newGame->setMJ($username);

      $manager = $this->getDoctrine()->getManager();
      $manager->persist($newGame);
      $manager->flush();

      exec('node ../../Node/server.js ' . $port . ' 2>&1 | tee -a /var/www/logs_node/' . $port . '-' . $timestamp . '.log 2>/dev/null >/dev/null &');
    }

    return $this->redirectToRoute('game_board', [
      'port' => $port,
    ]);
  }

  /**
   * @Route("game/{port}", name="game_board")
   * @IsGranted("ROLE_USER")
   */
  public function gameBoard(Connection $connection, $port)
  {
    $username = $this->getUser()->getNickname();

    // Récupère tous les noms d'utilisateurs qui sont dans la colonne "MJ"
    $gameMj = $connection->fetchColumn('SELECT mj FROM game_server WHERE port=' . $port . '');

    // Vérifie si le MJ est existant: Si pas le cas, aucune partie existe (404)
    if ($gameMj == null) {
      throw $this->createNotFoundException("Error");
    } 
    // Vérifie si l'utilisateur est MJ
    elseif ($username === $gameMj) {
      return $this->render('game/gameboard.html.twig', [
        'port' => $port,
        'username' => $username,
        'is_mj' => true
      ]);
    } else {
      return $this->render('game/gameboard.html.twig', [
        'port' => $port,
        'username' => $username,
        'is_mj' => false
      ]);
    }
  }
}
