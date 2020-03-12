<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api")
 */
class PokemonApiController extends AbstractController
{

     /**
      * @Route("/pokemons", name="api_pokemons")
      */
     public function pokemonsList ()
     {
         $Pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

         return $this->json($Pokemons, 200, ["Access-Control-Allow-Origin: *"], ["groups" => "pokemon:list"]);
     }

     /**
      * @Route("/pokemon/{id}", name="api_pokemon_id")
      */
      public function pokemonById (Pokemon $pokemon)
      {
          
          return $this->json($pokemon, 200, ["Access-Control-Allow-Origin: *"], ["groups" => "pokemon:detail"]);
      }
}
