<?php

namespace App\Controller;

use App\Entity\GameServer;
use App\Entity\Team;
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

    /**
     * @Route("/team", name="team")
     * @IsGranted("ROLE_USER")
     */
    public function team()
    {
        $team = $this->getDoctrine()->getRepository(Team::class)->findAll();

        return $this->render('main/team.html.twig', [
            'team' => $team
          ]);
    }

}
