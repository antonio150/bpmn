<?php

namespace App\Controller;

use App\Entity\StartEv;
use App\Form\StartEvType;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use App\Repository\StartEvRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StartEvController extends AbstractController
{
    #[Route('/start_ev', name: 'app_start_ev')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
    ): Response
    {
        $startEv = new StartEv();
        $form = $this->createForm(StartEvType::class, $startEv);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameStart');
            $rec1 = $request->request->get('typeStart');
            $rec2 = $request->request->get('topStart');
            $rec3 = $request->request->get('leftStart');
            $rec4 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec4));

            $startEv = $form->getData();
            // $startEv->setIdOrg( $val);
            $startEv->setNameStart( $rec0);
            $startEv->setTypeStart( $rec1);
            $startEv->setTopStartEv( $rec2);
            $startEv->setLeftStartEv( $rec3);
            $startEv->setLaneId( $val);

            $manager->persist($startEv);
            $manager->flush();
        }

        return $this->render('start_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    #[Route('/start_ev/get/{idLane}', name: 'app_start_ev.get')]
    public function getStartSaved(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
        StartEvRepository $startRepo,
        $idLane,
    ): Response
    {
        $startEv = new StartEv();
        $form = $this->createForm(StartEvType::class, $startEv);

        $idLane2 = dump($idLane);

        $val0 = $laneRepo->findOneBy(array('id' => $idLane2));
        $val = $startRepo->findBy(array('lane_id' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idStart'=>$val2->getId(),
                    'nameStart'=>$val2->getNameStart(),
                    'typeStart'=>$val2->getTypeStart(),
                    'topStart'=>$val2->getTopStartEv(),
                    'leftStart'=>$val2->getLeftStartEv(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);


        return $this->render('start_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
