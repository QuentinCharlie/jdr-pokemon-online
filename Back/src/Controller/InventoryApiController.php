<?php

namespace App\Controller;

use App\Entity\Inventory;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api")
 */
class InventoryApiController extends AbstractController
{
    

     /**
      * @Route("/inventories", name="api_inventories")
      */
     public function inventoriesList ()
     {
        $inventories = $this->getDoctrine()->getRepository(Inventory::class)->findAll();
        // Encode la BDD en JSON
        // Envoie le code HTTP 200 (Requête ok)
        // Envoie un header pour autorisé l'accès en lecture
        // Définie le groupe d'affichage
        return $this->json($inventories, 200, ["Access-Control-Allow-Origin" => "*"], ["groups" => "inventory:list"]);
     }

     /**
      * @Route("/inventory/{id}", name="api_inventory_id")
      */
      public function inventoryById (Inventory $inventory)
      {
          
        return $this->json($inventory, 200, ["Access-Control-Allow-Origin" => "*"], ["groups" => "inventory:detail"]);
      }
}
