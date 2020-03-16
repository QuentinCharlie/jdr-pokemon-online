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
    if (!is_dir("/var/www/logs_node")) {
      mkdir("/var/www/logs_node", 0777, true);
    }
    // @todo
    // Le $id correspond à l'id de la game
    // La variable $port sera une concaténation 3000 + $id (sans le timestamp)

    // BDD: Il faut une table qui stocke les ports utilisés (6.000 -> 7.000)
    // Il faut hydrater la BDD avant le exec() pour réserver le port
    // avant de lancer le script node server.js
    // Il faut un endpoint API pour que le serveur 
    // qui est sur le point de se fermer tout seul puisse notifier 
    // à l'api que le port est disponible pour les prochaines instanciations 
    // (donc de le supprimer de la table)

    // $cmd = exec('node ../../Node/server.js 2>&1 | tee -a /var/www/logs_node/' . $id . '.log 2>/dev/null >/dev/null &');
    $timestamp = microtime(true) * 1000;

    //$all_ports = [ 6000, 6001, 6002 ]; // Tout les ports en dur
    $all_ports = range(6000, 7000);

    //$used_ports = [  ]; // récupération via la DB des ports utilisés

    $used_ports = $connection->fetchAll('SELECT port FROM game_server');
    $databasePorts = [];
    foreach ($used_ports as $array) {
      $databasePorts[] = (int) $array['port'];
    }

    $available_ports = array_diff($all_ports, $databasePorts);
    sort($available_ports);

    $port = $available_ports[0]; // <== 6000

    $username = $this->getUser()->getNickname();

    if (!@fsockopen('localhost', $port)) {

      $newGame = new GameServer();
      $newGame->setPort($port);
      $newGame->setMJ($username);

      $manager = $this->getDoctrine()->getManager();
      $manager->persist($newGame);
      $manager->flush();

      exec('node ../../Node/server.js ' . $port . ' 2>&1 | tee -a /var/www/logs_node/' . $port . '-' . $timestamp . '.log 2>/dev/null >/dev/null &');
    }
    // $cmd = exec('pwd');
    // dd($cmd);
    // dd(file_get_contents("/var/www/logs_node/1.log"));

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

    $gameMj = $connection->fetchColumn('SELECT mj FROM game_server WHERE port=' . $port . '');

    if ($gameMj == null) {
      throw $this->createNotFoundException("Error");
    } elseif ($username === $gameMj /* check if user is MJ */) {
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
