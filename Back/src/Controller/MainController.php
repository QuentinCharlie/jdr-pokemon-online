<?php

namespace App\Controller;

use App\Entity\GameServer;
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
        // Si l'utilisateur est connecté alors redirection de la route sur la liste des parties
        if ($this->getUser()) {
            return $this->redirectToRoute('game_list');
       }
       
        return $this->render('main/homepage.html.twig');
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
