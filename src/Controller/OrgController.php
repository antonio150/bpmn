<?php

namespace App\Controller;

use App\Entity\GroupeOrganisation;
use App\Entity\Organisation;
use App\Entity\Pool;
use App\Entity\RolesOrganisation;
use App\Entity\UsersOrganisation;
use App\Form\OrganisationType;
use App\Repository\OrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrgController extends AbstractController
{
    #[Route('/org', name: 'app_org')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        OrganisationRepository $repository,
        PaginatorInterface $paginator,

    ): Response
    {
        $org = new Organisation();
        $form = $this->createForm(OrganisationType::class, $org);
        $form->handleRequest($request);


       
        if($form->isSubmitted() && $form->isValid()){

            
            $org = $form->getData();

            $manager->persist($org);
           
            $manager->flush();
            
            $id = $org->getId();
            echo ("ceci est ".$id);


            // $id = $repository->findAll();
            return $this->redirectToRoute('app_groupe_org',['id' => $id]);
        }


        $Org1 =$repository->findAll();
        return $this->render('org/index.html.twig', [
            'form' => $form->createView(),
            'Organisation' => $Org1
        ]);
    }



    #[Route('/org/edit/{id}/{urlId}', name: 'app_org.edit', methods:['GET', 'POST'])]
    public function edit(
        Organisation $Org,
        Request $request,
        EntityManagerInterface $manager,
        OrganisationRepository $repository,
        $urlId,
        $id,
    ): Response
    {
        $form = $this->createForm(OrganisationType::class, $Org);

        $form->handleRequest($request);
        $idBtnOrg = dump($id);
        $Org1 =$repository->findAll();

        if($form->isSubmitted() && $form->isValid()){
            $Org = $form->getdata();

            $manager->persist($Org);
            $manager->flush();

            return $this->redirectToRoute('app_interface', ['id' => $id]);
        }

       
        return $this->render('org/edit.html.twig',[
            'form' => $form->createView(),
            'idUrl' => $idBtnOrg,
            'Organisation' => $Org1,
            'orgId' => $id
        ]);
    }


    #[Route('/org/delete/{id}', name: 'app_org.delete', methods:['GET'])]
    public function delete(
        EntityManagerInterface $manager,
        Organisation $Org,
        // GroupeOrganisation $groupOrg,
        // UsersOrganisation $userOrg,
        // RolesOrganisation $rolesOrg,
        // Pool $pool,

        Request $request,
        $id,
    ) : Response
    {
        $idBtnOrg = dump($id);

        $manager->remove($Org);
        
        $manager->flush();

        $this->addFlash(
            'success',
            'Votre ingrédient a été supprimé avec succès'
        );

        return $this->redirectToRoute('app_interface', ['id' => $id]);
    }
}
