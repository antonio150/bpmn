<?php

namespace App\Controller;

use App\Entity\StopEv;
use App\Form\StopEvType;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use App\Repository\StopEvRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StopEvController extends AbstractController
{
    #[Route('/stop_ev', name: 'app_stop_ev')]
    public function index(
        EntityManagerInterface $manager,
        Request $request,
        LaneRepository $laneRepo,
    ): Response
    {
        $stopEv = new StopEv();
        $form = $this->createForm(StopEvType::class, $stopEv);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameStop');
            $rec1 = $request->request->get('typeStop');
            $rec2 = $request->request->get('topStop');
            $rec3 = $request->request->get('leftStop');
            $rec4 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec4));

            $stopEv = $form->getData();
            // $stopEv->setIdOrg( $val);
            $stopEv->setNameStopEv( $rec0);
            $stopEv->setTypeStop( $rec1);
            $stopEv->setTopStopEv( $rec2);
            $stopEv->setLeftStopEv( $rec3);
            $stopEv->setLaneId( $val);

            $manager->persist($stopEv);
            $manager->flush();
        }

        return $this->render('stop_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/stop_ev/get/{idLane}', name: 'app_stop_ev.get')]
    public function getStopSave(
        EntityManagerInterface $manager,
        Request $request,
        LaneRepository $laneRepo,
        StopEvRepository $stopRepo,
        $idLane,
    ): Response
    {
        $stopEv = new StopEv();
        $form = $this->createForm(StopEvType::class, $stopEv);

        $idLane2 = dump($idLane);

        $val0 = $laneRepo->findOneBy(array('id' => $idLane2));
        $val = $stopRepo->findBy(array('lane_id' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idStop'=>$val2->getId(),
                    'nameStop'=>$val2->getNameStopEv(),
                    'typeStop'=>$val2->getTypeStop(),
                    'topStop'=>$val2->getTopStopEv(),
                    'leftStop'=>$val2->getLeftStopEv(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);

        return $this->render('stop_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
