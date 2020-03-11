<?php

namespace App\Controller;

use App\Entity\Trainer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api")
 */
class TrainerApiController extends AbstractController
{
    /**
     *inventory : tous les items
     *inventory/id : id, name, description, price, category
     *inventory/category : liste des catégories
     */

     /**
      * @Route("/trainers", name="api_trainers")
      */
     public function trainersList ()
     {
         $trainers = $this->getDoctrine()->getRepository(Trainer::class)->findAll();

         return $this->json($trainers, 200, [], ["groups" => "trainer:list"]);
     }

     /**
      * @Route("/trainer/{id}", name="api_trainer_id")
      */
      public function trainerById (Trainer $trainer)
      {
          
          return $this->json($trainer, 200, [], ["groups" => "trainer:list"]);
      }
}
