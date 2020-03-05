<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class ProfilController extends AbstractController
{

    /**
     * @Route("/profil/{slug}", name="profil")
     * @IsGranted("ROLE_USER")
     */
    public function profil()
    {

        return $this->render('profil/profil.html.twig');
    }
}
