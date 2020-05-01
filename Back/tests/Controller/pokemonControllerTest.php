<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class pokemonControllerTest extends WebTestCase 
{
    public function testpokemonList()
    {
        $client = static::createClient();

        $client->request('GET', '/pokemon/list');

        $response = $client->getResponse();

        $this->assertEquals(302, $response->getStatusCode());

        $crawler = $client->followRedirect();

        $responseAfterRedirect = $client->getResponse();

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertSelectorTextContains(
            "html h1", 
            "Connectez-vous", 
            "Le titre de la page n'est pas correct"
        );

        $this->assertEquals(
            1, 
            $crawler->filter("input#inputEmail")->count(), 
            "Il n'y a pas de input pour l'email"
        );

        $this->assertCount(
            4, 
            $crawler->filter("input"), 
            "Le formulaire n'est pas correct"
        );

        $this->assertSelectorTextContains(
            "form button", 
            "Sign in", 
            "Le bouton du formulaire n'éxiste pas"
        );

        $client->followRedirects();

        $form = $crawler->selectButton("Sign in")->form();

        $form['email'] = "fatoon@jdrpokemon.bzh";
        $form['password'] = "f4t00n";

        $crawler = $client->submit($form);

        $this->assertSelectorTextContains(
            "h2", 
            "Liste des Pokémon", 
            "On n'est a pas sur la bonne page"
        );

        $this->assertCount(151, $crawler->filter('.card'));

        $this->assertEquals(
            "Herbizarre",
            $crawler->filter('.card')->eq(1)->filter('h5')->text()
        );

        $link = $crawler->filter('.card')->eq(1)->filter('a:contains("Voir les détails")')->link();

        $crawler = $client->click($link);

        $this->assertSelectorTextContains(
            "h3", 
            "Herbizarre : Plante Poison", 
            "On n'est a pas sur la bonne page"
        );
    }
}