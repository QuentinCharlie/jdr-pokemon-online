<?php

namespace App\Controller;

use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class GameController extends AbstractController
{
  const PORT_START = 6000;
  const PORT_STOP = 7000;
  const PORT_NB    = 2000;


  /**
   * @Route("/game/create", name="game_board")
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
    $all_ports = range(6000, 7000, 1);
 
    //$used_ports = [  ]; // récupération via la DB des ports utilisés

    $used_ports = $connection->fetchAll('SELECT port FROM game_server');
    dd($used_ports);
    $available_ports = array_diff($all_ports, $used_ports); // ==> [ 6002 ]

  
    sort($available_ports);
    $port = $available_ports[0]; // <== 6000

    if (!@fsockopen('localhost', $port)) {
      // TODO : Ajouter le port réservé (et qui sera utilisé dans la ligne suivante) par ce serveur en base
      exec('node ../../Node/server.js ' . $port . ' 2>&1 | tee -a /var/www/logs_node/' . $id . '-' . $timestamp . '.log 2>/dev/null >/dev/null &');
      // TODO : stocker le nom du MJ ici
      $is_new_game = true;
    }
    // $cmd = exec('pwd');
    // dd($cmd);
    // dd(file_get_contents("/var/www/logs_node/1.log"));

    $username = $this->getUser()->getNickname();

    if ($is_new_game || $username === $game_mj /* check if user is MJ */) {
      return $this->render('game/gameboard.html.twig', [
        'port' => $port,
        'is_mj' => true
      ]);
    }

    return $this->render('game/gameboard.html.twig', [
      'port' => $port,
    ]);
  }
}
