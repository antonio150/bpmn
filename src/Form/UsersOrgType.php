<?php

namespace App\Form;

use App\Entity\UsersOrganisation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UsersOrgType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('usernameUsersOrg')
            ->add('passwordUsersOrg', PasswordType::class)
            ->add('titleUsersOrg')
            ->add('firstnameUsersOrg')
            ->add('lastnameUsersOrg')
            ->add('groupeOrg')
            ->add('rolesOrga')
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => UsersOrganisation::class,
        ]);
    }
}
