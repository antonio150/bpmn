<?php

namespace App\Controller;

use App\Entity\Lane;
use App\Form\LaneType;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use App\Repository\PoolRepository;
use Doctrine\ORM\EntityManagerInterface;
use JetBrains\PhpStorm\Internal\LanguageLevelTypeAware;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LaneController extends AbstractController
{
    #[Route('/lane', name: 'app_lane')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        PoolRepository $poolRepo,
    ): Response
    {
        $laneEv = new Lane();
        $form = $this->createForm(LaneType::class, $laneEv);

        // $poolRepo = new PoolRepository();

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameLane');
            $rec1 = $request->request->get('widthLane');
            $rec2 = $request->request->get('heightLane');
            $rec7 = $request->request->get('poolid');

            $val = $poolRepo->findOneBy(array('id' => $rec7));

         
            // $laneEv = $form->getData();
            // $laneEv->setIdOrg( $val);
            $laneEv->setNameLane( $rec0);
            $laneEv->setWidthLane( $rec1);
            $laneEv->setHeightLane( $rec2);
            $laneEv->setPool( $val);

            $manager->persist($laneEv);
            $manager->flush();
        }

        return $this->render('lane/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/lane/get/{poolId}/{nameLane}', name: 'app_lane.get')]
    public function getData(
        Request $request,
        EntityManagerInterface $manager,
        PoolRepository $poolRepo,
        LaneRepository $laneRepo,
        $poolId,
        $nameLane
    ): Response
    {
    
        $laneEv = new Lane();
        $form = $this->createForm(LaneType::class, $laneEv);
        
        $poolId2 = dump($poolId);
        $nameLane2 = dump($nameLane);

      
        $val0 = $poolRepo->findOneBy(array('id' => $poolId2));
        $val = $laneRepo->findOneBy(array( 'nameLane' => $nameLane2, 'pool' => $val0));

       
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
           
                $temp = array(
                    'idLane'=>$val->getId(),
                );
                $jsonData[] = $temp;
            }

            return new JsonResponse($jsonData);

            echo("val = ".$val->getId());
        
        return $this->render('lane/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    #[Route('/lane/get/{poolId}', name: 'app_lane.get.saved')]
    public function getDataSaved(
        Request $request,
        EntityManagerInterface $manager,
        PoolRepository $poolRepo,
        LaneRepository $laneRepo,
        $poolId,
        // $nameLane
    ): Response
    {
    
        $laneEv = new Lane();
        $form = $this->createForm(LaneType::class, $laneEv);
        
        $poolId2 = dump($poolId);
        // $nameLane2 = dump($nameLane);

      
        $val0 = $poolRepo->findOneBy(array('id' => $poolId2));
        $val = $laneRepo->findBy(array('pool' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idLane'=>$val2->getId(),
                    'nameLane'=>$val2->getNameLane(),
                    'widthLane'=>$val2->getWidthLane(),
                    'heightLane'=>$val2->getHeightLane(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);

            // echo("val = ".$val->getId());
        
        return $this->render('lane/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
