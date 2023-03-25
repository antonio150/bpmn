<?php

namespace App\Controller;

use App\Entity\UsersOrganisation;
use App\Form\UsersOrgType;
use App\Repository\OrganisationRepository;
use App\Repository\UsersOrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserOrgController extends AbstractController
{
    #[Route('/user/index/{id}', name: 'app_user_org', methods:['POST', 'GET'])]
    public function index(
        // UsersOrganisation $usersOrganisation,
        Request $request,
        EntityManagerInterface $manager,
        UsersOrganisationRepository $repository,
        $id,
        PaginatorInterface $paginator,
        OrganisationRepository $orgRepo,
    ): Response
    {
        $usersOrganisation = new UsersOrganisation();
        $form = $this->createForm(UsersOrgType::class, $usersOrganisation);
        $form->handleRequest($request);
        $idBtnOrg = dump($id);

        $val = $orgRepo->findOneBy(array('id' => $idBtnOrg));

        if($form->isSubmitted() && $form->isValid()){
            $usersOrganisation = $form->getData();
            $usersOrganisation->setIdOrg($val);
            $manager->persist($usersOrganisation);
            $manager->flush();

            $this->addFlash(
                'success',
                'Votre recette a été crée avec succès'
            );

            // return $this->redirectToRoute('app_user_org');
        }

        $userGroupeOrg = $paginator->paginate(
            $repository->findBy(array('idOrg' => $idBtnOrg)),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('user_org/index.html.twig', [
            'form' => $form->createView(),
            'userOrg' => $userGroupeOrg,
            'idUrl' => $id
        ]);
    }

    #[Route('/users/edit/{id}/{idUsers}', name: 'app_user_org.edit', methods:['GET', 'POST'])]
    public function edit(
        UsersOrganisation $usersOrg,
        Request $request,
        UsersOrganisationRepository $repository,
        EntityManagerInterface $manager,
        $id,
        $idUsers,
    ): Response
    {
        $form = $this->createForm(UsersOrgType::class, $usersOrg);

        $form->handleRequest($request);
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idUsers);

        $userGroupeOrg = $repository->findBy(array('idOrg' => $idBtnOrg1));
            

        if($form->isSubmitted() && $form->isValid()){
            $usersOrg = $form->getdata();

            $manager->persist($usersOrg);
            $manager->flush();

            return $this->redirectToRoute('app_user_org', [ 'id' => $idBtnOrg1]);
        }

       
        return $this->render('user_org/edit.html.twig',[
            'form' => $form->createView(),
            'userOrg' => $userGroupeOrg,
            'idUrl' => $idBtnOrg
        ]);
    }

    #[Route('/users/delete/{id}/{idUsers}', name: 'app_user_org.delete', methods:['GET'])]
    public function delete(
        EntityManagerInterface $manager,
        UsersOrganisation $usersOrg,
        $id,
        $idUsers,
    ) : Response
    {
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idUsers);

        $manager->remove($usersOrg);
        $manager->flush();

        $this->addFlash(
            'success',
            'Votre ingrédient a été supprimé avec succès'
        );

        return $this->redirectToRoute('app_user_org', [ 'id' => $idBtnOrg1]);
    }
}
