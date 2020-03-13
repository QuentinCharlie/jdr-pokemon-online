<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{

    /**
     * @Route("/", name="homepage")
     */
    public function welcome()
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('game_list');
       }
       
        return $this->render('main/homepage.html.twig');
    }

    /**
     * @Route("/play", name="game_list")
     * @IsGranted("ROLE_USER")
     */
    public function gameList()
    {

        return $this->render('main/gamelist.html.twig');
    }

    /**
     * @Route("/ressources", name="ressources")
     * @IsGranted("ROLE_USER")
     */
    public function ressources()
    {
        return $this->render('main/ressources.html.twig');
    }
}
