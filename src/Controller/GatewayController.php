<?php

namespace App\Controller;

use App\Entity\Gateway;
use App\Form\GatewayType;
use App\Repository\GatewayRepository;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GatewayController extends AbstractController
{
    #[Route('/gateway', name: 'app_gateway')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
    ): Response
    {
        $gatewayEv = new Gateway();
        $form = $this->createForm(GatewayType::class, $gatewayEv);

       

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameGateway');
            $rec1 = $request->request->get('typeGateway');
            $rec2 = $request->request->get('topGateway');
            $rec3 = $request->request->get('leftGateway');
            $rec4 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec4));

            $gatewayEv = $form->getData();
            // $gatewayEv->setIdOrg( $val);
            $gatewayEv->setNameGateway( $rec0);
            $gatewayEv->setTypeGateway( $rec1);
            $gatewayEv->setTopGateway( $rec2);
            $gatewayEv->setLeftGateway( $rec3);
            $gatewayEv->setLaneId( $val);

            $manager->persist($gatewayEv);
            $manager->flush();
        }

        return $this->render('gateway/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/gateway/get/{laneId}', name: 'app_gateway.get')]
    public function getLaneSave(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
        GatewayRepository $gateRepo,
        $laneId
    ): Response
    {
        $gatewayEv = new Gateway();
        $form = $this->createForm(GatewayType::class, $gatewayEv);

        $val0 = $laneRepo->findOneBy(array('id' => $laneId));
        $val = $gateRepo->findBy(array('lane_id' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idLane'=>$val2->getId(),
                    'nameGateway'=>$val2->getNameGateway(),
                    'typeGateway'=>$val2->getTypeGateway(),
                    'topGateway'=>$val2->getTopGateway(),
                    'leftGateway'=>$val2->getLeftGateway(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);


        return $this->render('gateway/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
