<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/trainer")
 * @IsGranted("ROLE_USER")
 */
class TrainerController extends AbstractController
{

    /**
     * @Route("/list", name="list_trainer")
     */
    public function trainerList()
    {

        return $this->render('trainer/trainerlist.html.twig');
    }

    /**
     * @Route("/{id}", name="detail_trainer")
     */
    public function trainerById()
    {

        return $this->render('trainer/detailtrainer.html.twig');
    }
}
