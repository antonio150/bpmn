<?php

namespace App\Controller;

use App\Entity\RolesOrganisation;
use App\Form\RolesOrgType;
use App\Repository\OrganisationRepository;
use App\Repository\RolesOrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RolesOrgController extends AbstractController
{
    #[Route('/roles/index/{id}', name: 'app_roles_org')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        RolesOrganisationRepository $repository,
        $id,
        PaginatorInterface $paginator,
        OrganisationRepository $orgRepo,
    ): Response
    {
        $rolesOrg = new RolesOrganisation();
        $form = $this->createForm(RolesOrgType::class, $rolesOrg);
        $form->handleRequest($request);

        $idBtnOrg= dump($id);

        $val = $orgRepo->findOneBy(array('id' => $idBtnOrg));
        
        if($form->isSubmitted() && $form->isValid()){
            $rolesOrg = $form->getData();
            $rolesOrg->setOrgId( $val);
            $manager->persist($rolesOrg);
            $manager->flush();

            $this->addFlash(
                'success',
                'Votre recette a été crée avec succès'
            );

        }

        $rolesGroupeOrg = $paginator->paginate(
            $repository->findBy(array('orgId' => $idBtnOrg)),
            $request->query->getInt('page', 1), /*page number*/
            10
        );
        return $this->render('roles_org/index.html.twig', [
            'form' => $form->createView(),
            'rolesGroupeOrg' => $rolesGroupeOrg,
            'idUrl' => $id
        ]);
    }

    #[Route('/roles/edit/{id}/{idRoles}', name: 'app_roles_org.edit', methods:['GET', 'POST'])]
    public function edit(
        RolesOrganisation $rolesOrg,
        Request $request,
        RolesOrganisationRepository $repository,
        EntityManagerInterface $manager,
        $id,
        $idRoles,
    ): Response
    {
        $form = $this->createForm(RolesOrgType::class, $rolesOrg);

        $form->handleRequest($request);
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idRoles);

        $rolesGroupeOrg = $repository->findBy(array('orgId' => $idBtnOrg1));
            

        if($form->isSubmitted() && $form->isValid()){
            $rolesOrg = $form->getdata();

            $manager->persist($rolesOrg);
            $manager->flush();

            return $this->redirectToRoute('app_roles_org', [ 'id' => $idBtnOrg1]);
        }

       
        return $this->render('roles_org/edit.html.twig',[
            'form' => $form->createView(),
            'rolesGroupeOrg' => $rolesGroupeOrg,
            'idUrl' => $idBtnOrg
        ]);
    }

    #[Route('/roles/delete/{id}/{idRoles}', name: 'app_roles_org.delete', methods:['GET'])]
    public function delete(
        EntityManagerInterface $manager,
        RolesOrganisation $rolesOrg,
        $id,
        $idRoles,
    ) : Response
    {
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idRoles);

        $manager->remove($rolesOrg);
        $manager->flush();

        $this->addFlash(
            'success',
            'Votre ingrédient a été supprimé avec succès'
        );

        return $this->redirectToRoute('app_roles_org', [ 'id' => $idBtnOrg1]);
    }

}
