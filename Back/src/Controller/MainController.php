<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{

    /**
     * @Route("/", name="homepage")
     */
    public function welcome()
    {

        return $this->render('main/homepage.html.twig');
    }

    /**
     * @Route("/play", name="game_list")
     */
    public function gameList()
    {

        return $this->render('main/gamelist.html.twig');
    }

    /**
     * @Route("/ressources", name="ressources")
     */
    public function ressources()
    {

        return $this->render('main/ressources.html.twig');
    }
}
