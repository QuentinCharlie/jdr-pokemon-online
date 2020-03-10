<?php

namespace App\Controller;

use App\Entity\Trainer;
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


        $trainers = $this->getDoctrine()->getRepository(Trainer::class)->findAll();

        return $this->render('trainer/trainerlist.html.twig', [
            'trainers' => $trainers
        ]);
    }

    /**
     * @Route("/{id}", name="detail_trainer")
     */
    public function trainerById(Trainer $trainer)
    {

        return $this->render('trainer/detailtrainer.html.twig', [
            'trainer' => $trainer
        ]);
    }
}
