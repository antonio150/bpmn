<?php

namespace App\Controller;

use App\Entity\GroupeOrganisation;
use App\Entity\Organisation;
use App\Form\GroupeOrganisationType;
use App\Repository\GroupeOrganisationRepository;
use App\Repository\OrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use phpDocumentor\Reflection\Types\Integer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GroupeOrgController extends AbstractController
{

    #[Route('/groupe/index/{id}', name: 'app_groupe_org', methods:['GET', 'POST'])]
    public function index(
        Request $request,
        PaginatorInterface $paginator,
        EntityManagerInterface $manager,
        GroupeOrganisationRepository $repository,
        $id,
        OrganisationRepository $orgRepo,
        
    ): Response
    {
        $groupeOrg = new GroupeOrganisation();
        $form = $this->createForm(GroupeOrganisationType::class, $groupeOrg);
        $form->handleRequest($request);

        $idBtnOrg = dump($id);


        $val = $orgRepo->findOneBy(array('id' => $idBtnOrg));
   

        // echo $rec1;
        if($form->isSubmitted() && $form->isValid()){
            $groupeOrg = $form->getData();
            $groupeOrg->setIdOrg( $val);

            $manager->persist($groupeOrg);
            $manager->flush();

            $this->addFlash(
                'success',
                'Votre Groupe a été crée avec succès'
            );
          

        }
        $groupeOrg1 = $paginator->paginate(
            $repository->findBy(array('id_org' => $idBtnOrg) ),
            $request->query->getInt('page', 1), /*page number*/
            10 
        );

       
       

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $jsonData = array();
            $idx = 0;
            foreach($groupeOrg1 as $groupe){
                $temp = array(
                    'name'=> $groupe->getNameGroupeOrg(),
                    'display'=> $groupe->getDisplaynameGroupeOrg(),
                );
                $jsonData[$idx++] = $temp;
            }

            return new JsonResponse($jsonData);
        }

        return $this->render('groupe_org/index.html.twig', [
            'form' => $form->createView(),
            'groupeOrganisation' => $groupeOrg1,
            'idUrl' => $idBtnOrg
        ]);
    }


    #[Route('/groupe/edit/{id}/{idGroup}', name: 'app_groupe_org.edit', methods:['GET', 'POST'])]
    public function edit(
        GroupeOrganisation $groupeOrg,
        Request $request,
        GroupeOrganisationRepository $repository,
        EntityManagerInterface $manager,
        $id,
        $idGroup,
    ): Response
    {
        $form = $this->createForm(GroupeOrganisationType::class, $groupeOrg);

        $form->handleRequest($request);
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idGroup);

        $groupeOrg1= $repository->findBy(array('id_org' => $idBtnOrg1) );

        if($form->isSubmitted() && $form->isValid()){
            $groupeOrg = $form->getdata();

            $manager->persist($groupeOrg);
            $manager->flush();

            return $this->redirectToRoute('app_groupe_org', [ 'id' => $idBtnOrg1]);
        }

        
                  
        return $this->render('groupe_org/edit.html.twig',[
            'form' => $form->createView(),
            'groupeOrganisation' => $groupeOrg1,
            'idUrl' => $idBtnOrg
        ]);
    }

    #[Route('/groupe/delete/{id}/{idGroup}', name: 'app_groupe_org.delete', methods:['GET'])]
    public function delete(
        EntityManagerInterface $manager,
        GroupeOrganisation $groupeOrg,
        Request $request,
        $id,
        $idGroup,
    ) : Response
    {
        $idBtnOrg = dump($id);
        $idBtnOrg1 = dump($idGroup);

        // $del = $request->request->get('idDel');

        $manager->remove($groupeOrg);
        $manager->flush();

        $this->addFlash(
            'success',
            'Votre ingrédient a été supprimé avec succès'
        );

        return $this->redirectToRoute('app_groupe_org', [ 'id' => $idBtnOrg1]);
    }
}
