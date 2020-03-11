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
     *pokemon : tous les pokemon et sa couleur
     *pokemon/id : un pokemon spécifique avec son type
     *pokemon/id/attacks : set d’attaque d’un pokemon avec les types pour chaque attaque et couleurs
     *inventory : tous les items
     *inventory/id : id, name, description, price, category
     *inventory/category : liste des catégories
     */

     /**
      * @Route("/pokemons", name="api_pokemons")
      */
     public function pokemonsList ()
     {
         $Pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

         return $this->json($Pokemons, 200, [], ["groups" => "pokemon:list"]);
     }

     /**
      * @Route("/pokemon/{id}", name="api_pokemon_id")
      */
      public function pokemonById (Pokemon $pokemon)
      {
          
          return $this->json($pokemon, 200, [], ["groups" => "pokemon:detail"]);
      }
}
