<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Avatar;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class AdminUpdateFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class)

            ->add('nickname', TextType::class, [
                'label' => 'Pseudo'
            ])

            ->add('avatar', EntityType::class,[
                'class' => Avatar::class,
                'choice_label' => 'name',
                'expanded' => true,
                'multiple' => false
            ])

            ->add('roles', ChoiceType::class, array(
                'attr' => array(
                    'class' => 'form-control',
                    'required' => false,
                ),
                'multiple' => true,
                'expanded' => true, // render check-boxes
                'choices' => [
                    'admin' => 'ROLE_ADMIN',
                    'user' => 'ROLE_USER',
                ]
                ))
  
            ->add(
                'save',
                SubmitType::class, 
                [
                    "label" => "Enregistrer"
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
