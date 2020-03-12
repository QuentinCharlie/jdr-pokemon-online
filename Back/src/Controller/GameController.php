<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


class GameController extends AbstractController
{

    /**
     * @Route("/game/{id}", name="game_board")
     */
    public function gameBoard($id)
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
      $timestamp = microtime(true)*1000;
      $port = 6000 + $id;
      if (!@fsockopen('localhost', $port)) {
        exec('node ../../Node/server.js ' . $port . ' 2>&1 | tee -a /var/www/logs_node/' . $id . '-' . $timestamp . '.log 2>/dev/null >/dev/null &');
        return $this->render('game/gameboard.html.twig', [
          'port' => $port,
          'isMJ' => true,
          // 'user' => $user,
        ]);  
      } 
      // $cmd = exec('pwd');
      // dd($cmd);
      // dd(file_get_contents("/var/www/logs_node/1.log"));

      return $this->render('game/gameboard.html.twig', [
        'port' => $port,
      ]);
    }
}
