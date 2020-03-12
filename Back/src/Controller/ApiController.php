<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ApiController extends AbstractController
{

    /**
     * @Route("/api", name="api_list")
     */
    public function trainerList() {

        return $this->render('api/api.html.twig');
    }

}
