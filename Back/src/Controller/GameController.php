<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GameController extends AbstractController
{

    /**
     * @Route("/game/{id}", name="game_board")
     */
    public function gameBoard()
    {

        return $this->render('game/gameboard.html.twig');
    }
}
