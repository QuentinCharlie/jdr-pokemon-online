<?php

namespace App\Controller;

use App\Entity\Pokemon;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/pokemon")
 * @IsGranted("ROLE_USER")
 */
class PokemonController extends AbstractController
{

    /**
     * @Route("/list", name="list_pokemon")
     */
    public function pokemonList()
    {

        $pokemons = $this->getDoctrine()->getRepository(Pokemon::class)->findAll();

        return $this->render('pokemon/pokemonlist.html.twig', [
            'pokemons' => $pokemons
        ]);
    }

    /**
     * @Route("/{id}", name="detail_pokemon")
     */
    public function pokemonById(Pokemon $pokemon)
    {

        return $this->render('pokemon/detailpokemon.html.twig', [
            'pokemon' => $pokemon
        ]);
    }
}
