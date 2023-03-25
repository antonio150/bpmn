<?php

namespace App\Controller;

use App\Entity\Pool;
use App\Form\PoolType;
use App\Repository\OrganisationRepository;
use App\Repository\PoolRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PoolController extends AbstractController
{
    #[Route('/pool', name: 'app_pool')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        OrganisationRepository $orgRepo,
    ): Response
    {
        $poolEv = new Pool();
        $form = $this->createForm(PoolType::class, $poolEv);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('namePool');
            $rec1 = $request->request->get('widthPool');
            $rec2 = $request->request->get('heightPool');
            $rec3 = $request->request->get('orgId');

           
            $val = $orgRepo->findOneBy(array('id' => $rec3));

            $poolEv = $form->getData();
            // $poolEv->setIdOrg( $val);
            $poolEv->setName( $rec0);
            $poolEv->setWidthPool( $rec1);
            $poolEv->setHeightPool( $rec2);
            $poolEv->setOrganisation( $val);

            $manager->persist($poolEv);
            $manager->flush();
        }

        return $this->render('pool/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/pool/get/{orgId}/{namePool}', name: 'app_pool.get')]
    public function getData(
        Request $request,
        EntityManagerInterface $manager,
        OrganisationRepository $orgRepo,
        PoolRepository $poolRepo,
        $orgId,
        $namePool
    ): Response
    {
        $pool = new Pool();
        $poolEv = new Pool();
        $form = $this->createForm(PoolType::class, $poolEv);
        
        $orgId2 = dump($orgId);
        $namePool2 = dump($namePool);

   
        $val0 = $orgRepo->findOneBy(array('id' => $orgId2));
        $val = $poolRepo->findOneBy(array( 'name' => $namePool2, 'organisation' => $val0));

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $jsonData = array();
            $idx = 0;
           
                $temp = array(
                    'idPool'=>$val->getId(),
                );
                $jsonData[] = $temp;
            }

            return new JsonResponse($jsonData);
        

        echo("val = ".$val->getId());

   

        return $this->render('pool/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/pool/get/{orgId}', name: 'app_pool.saved.get.saved')]
    public function getDataSaved(
        Request $request,
        EntityManagerInterface $manager,
        OrganisationRepository $orgRepo,
        PoolRepository $poolRepo,
        $orgId,
        // $namePool
    ): Response
    {
        $pool = new Pool();
        $poolEv = new Pool();
        $form = $this->createForm(PoolType::class, $poolEv);
        
        $orgId2 = dump($orgId);
        // $namePool2 = dump($namePool);

   
        $val0 = $orgRepo->findOneBy(array('id' => $orgId2));
        $val = $poolRepo->findBy(array('organisation' => $val0));
        
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idPool'=>$val2->getId(),
                    'namePool'=>$val2->getName(),
                    'widthPool'=>$val2->getWidthPool(),
                    'heightPool'=>$val2->getHeightPool(),

                );
                $jsonData[$idx++] = $temp;

             
                }

            }
            return new JsonResponse($jsonData);
        

       

   

        return $this->render('pool/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    #[Route('/pool/delete/{orgId}', name: 'app_pool.saved.delete', methods:['GET'])]
    public function deleteDataBefore(
        Request $request,
        EntityManagerInterface $manager,
        PoolRepository $poolRepo,
        OrganisationRepository $orgRepo,
        // Pool $pool,
        $orgId,
        // $namePool
    ): Response
    {
       
        $orgId2 = dump($orgId);
      
        $val0 = $orgRepo->findOneBy(array('id' => $orgId2));

        $val = $poolRepo->findBy(array( 'organisation' => $val0));

        foreach( $val as $val2){
            $manager->remove($val2);
            $manager->flush();
            
           
        }
        

        return $this->redirectToRoute('app_interface', [ 'id' => $orgId]);
    }


}
