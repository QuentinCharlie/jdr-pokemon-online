<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AdminFormType;
use App\Form\AdminUpdateFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/admins")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/users/list", name="admin_user_list")
     */
    public function userList()
    {   
        // Récupère tous les USERS dans la BDD
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();

        return $this->render('admin/userList.html.twig', [
            'users' => $users
        ]);
    }

    /**
     * @Route("/user/update/{id}", name="user_update")
     */
    public function userUpdate(Request $request, User $user)
    {   

        // Récupère l'utilisateur grâce à son ID et pré-rempli le formulaire
        $form = $this->createForm(AdminUpdateFormType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {

            $this->getDoctrine()->getManager()->flush();

            $this->addFlash("warning", "L'utilisateur a bien été modifié");

            return $this->redirectToRoute('admin_user_list');
        }

        return $this->render('admin/userDetail.html.twig', [
            "formView" => $form->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/user/delete/{id}", name="user_delete")
     */
    public function userDelete(User $user) {

        $entityManager = $this->getDoctrine()->getManager();
        // Supprime l'utilisateur que l'on retrouve grâce à son ID
        $entityManager->remove($user);
        $entityManager->flush();

        $this->addFlash("danger", "Le compte a bien été supprimé");

        return $this->redirectToRoute("admin_user_list");

    }
}
