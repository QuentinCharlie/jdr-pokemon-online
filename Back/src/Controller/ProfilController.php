<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Session;


/**
* @Route("/profil")
* @IsGranted("ROLE_USER")
*/
class ProfilController extends AbstractController
{

    /**
     * @Route("/{id}", name="profil")
     */
    public function profil()
    {
        
        return $this->render('profil/profil.html.twig');
    }


    /**
     * @Route("/delete/{id}", name="delete_profil")
     */
    public function userDelete(User $user) {

        // Supprime l'user grâce à son ID
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($user);

        // Ferme la session de l'utilisateur en cours
        $session = new Session();
        $session->invalidate();

        $entityManager->flush();

        $this->addFlash("warning", "Le compte a bien été supprimé");

        return $this->redirectToRoute("homepage");

    }
}
