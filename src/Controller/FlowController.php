<?php

namespace App\Controller;

use App\Entity\Flow;
use App\Form\FlowType;
use App\Repository\FlowRepository;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FlowController extends AbstractController
{
    #[Route('/flow', name: 'app_flow')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
    ): Response
    {
        $flowEv = new Flow();
        $form = $this->createForm(FlowType::class, $flowEv);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){

            $rec0 = $request->request->get('nameFlow');
            $rec1 = $request->request->get('initX');
            $rec2 = $request->request->get('initY');
            $rec3 = $request->request->get('initName');
            $rec4 = $request->request->get('endX');
            $rec5 = $request->request->get('endY');
            $rec6 = $request->request->get('endName');
            $rec7 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec7));

            $flowEv = $form->getData();
            // $flowEv->setIdOrg( $val);
            $flowEv->setNameFlow( $rec0);
            $flowEv->setInitX( $rec1);
            $flowEv->setInitY( $rec2);
            $flowEv->setInitName( $rec3);
            $flowEv->setEndX( $rec4);
            $flowEv->setEndY( $rec5);
            $flowEv->setEndName( $rec6);
            $flowEv->setLaneId( $val);

            $manager->persist($flowEv);
            $manager->flush();
        }

        return $this->render('flow/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/flow/get/{laneId}', name: 'app_flow.get')]
    public function getLaneSaved(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
        FlowRepository $flowRepo,
        $laneId
    ): Response
    {
        $flowEv = new Flow();
        $form = $this->createForm(FlowType::class, $flowEv);

        $laneId2 = dump($laneId);

        $val0 = $laneRepo->findOneBy(array('id' => $laneId2));
        $val = $flowRepo->findBy(array('lane_Id' => $val0));
        // dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idFow'=>$val2->getId(),
                    'nameFlow'=>$val2->getNameFlow(),
                    'initX'=>$val2->getInitX(),
                    'initY'=>$val2->getInitY(),
                    'initName'=>$val2->getInitName(),
                    'endX'=>$val2->getEndX(),
                    'endY'=>$val2->getEndY(),
                    'endName'=>$val2->getEndName(),

                );
                $jsonData[$idx++] = $temp;

             
                }

            }
            return new JsonResponse($jsonData);
        

        return $this->render('flow/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
