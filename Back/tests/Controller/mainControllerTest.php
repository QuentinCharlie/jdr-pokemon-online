<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class mainControllerTest extends WebTestCase 
{
    public function testPlayList()
    {
        $client = static::createClient();

        $client->request('GET', '/play');

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
            "p", 
            "Nous te souhaitons de passer de bonnes parties de Jeu de Rôles en notre compagnie !", 
            "On n'est a pas sur la bonne page"
        );

        $link = $crawler->selectLink("lien")->link();
        $crawler = $client->click($link);

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertCount(6, $crawler->filter('.card'));

        $this->assertEquals(
            "Fabien Perrichon",
            $crawler->filter('.card')->eq(1)->filter('h5')->text()
        );

        $link = $crawler->selectLink("Ressources")->link();
        $crawler = $client->click($link);

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertSelectorTextContains(
            "h2", 
            "Ressources", 
            "On n'est a pas sur la bonne page"
        );

        $link = $crawler->selectLink("Profil")->link();
        $crawler = $client->click($link);

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertSelectorTextContains(
            "h3", 
            "Pseudo", 
            "On n'est a pas sur la bonne page"
        );

        $link = $crawler->selectLink("Déconnexion")->link();
        $crawler = $client->click($link);

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertSelectorTextContains(
            "h4", 
            "Le jeu de rôle Pokémon en ligne", 
            "On n'est a pas sur la bonne page"
        );

        $link = $crawler->filter('a')->eq(0)->attr('href');
        $crawler = $client->request('GET',$link);

        $this->assertEquals(200, $responseAfterRedirect->getStatusCode());

        $this->assertSelectorTextContains(
            "h2", 
            "Inscription", 
            "On n'est a pas sur la bonne page"
        );

        $this->assertCount(
            11, 
            $crawler->filter("input"), 
            "Le formulaire n'est pas correct"
        );
    }
}