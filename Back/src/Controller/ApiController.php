<?php

namespace App\Controller;

use App\Entity\Trainer;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{

    /**
     * @Route("/trainers", name="api_trainers")
     */
    public function trainerList() {

        $trainers = $this->getDoctrine()->getRepository(Trainer::class)->findAll();
        return $this->json($trainers, 200, [], ["groups" => "trainer:list"]);
    }

}
