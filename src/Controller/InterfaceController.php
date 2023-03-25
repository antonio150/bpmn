<?php

namespace App\Controller;

use App\Entity\Organisation;
use App\Form\OrganisationType;
use App\Repository\OrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InterfaceController extends AbstractController
{
    #[Route('/interface/{id}', name: 'app_interface')]
    public function index(
        PaginatorInterface $paginator,
        OrganisationRepository $repository,
        EntityManagerInterface $manager,
        Request $request,
        $id,
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
        
        $Org1 = $repository->findAll();
       

        return $this->render('interface/index.html.twig', [
            'controller_name' => 'InterfaceController',
            'form' => $form->createView(),
            'Organisation' => $Org1,
            'idUrl' => $id,
        ]);
    }


    #[Route('/interface/edit/{id}', name: 'app_interface.edit')]
    public function edit(): Response
    {
        return $this->render('interface/edit.html.twig', [
            'controller_name' => 'InterfaceController',
        ]);
    }
}
