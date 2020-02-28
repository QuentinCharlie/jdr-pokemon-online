<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{

    /**
     * @Route("/signin", name="sign_in")
     */
    public function signIn()
    {

        return $this->render('auth/signin.html.twig');
    }

    /**
     * @Route("/signup", name="sign_up")
     */
    public function signUp()
    {

        return $this->render('auth/signun.html.twig');
    }
}
