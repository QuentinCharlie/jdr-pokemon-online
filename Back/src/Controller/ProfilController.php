<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfilController extends AbstractController
{

    /**
     * @Route("/profil/{slug}", name="profil")
     */
    public function profil()
    {

        return $this->render('profil/profil.html.twig');
    }
}
