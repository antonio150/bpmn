<?php

namespace App\Controller;

use App\Entity\InterEv;
use App\Form\InterEvType;
use App\Repository\InterEvRepository;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InterEvController extends AbstractController
{
    #[Route('/inter_ev', name: 'app_inter_ev')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
    ): Response
    {
        $interEv = new InterEv();
        $form = $this->createForm(InterEvType::class, $interEv);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameInter');
            $rec1 = $request->request->get('typeInter');
            $rec2 = $request->request->get('topInter');
            $rec3 = $request->request->get('leftInter');
            $rec4 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec4));

            $interEv = $form->getData();
            // $interEv->setIdOrg( $val);
            $interEv->setNameInterEv( $rec0);
            $interEv->setTypeInterEv( $rec1);
            $interEv->setTopInterEv( $rec2);
            $interEv->setLeftInterEv( $rec3);
            $interEv->setLaneId( $val);

            $manager->persist($interEv);
            $manager->flush();
        }

        return $this->render('inter_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/inter_ev/get/{idLane}', name: 'app_inter_ev.get')]
    public function getInterSaved(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
        InterEvRepository $inter,
        $idLane,
    ): Response
    {
        $interEv = new InterEv();
        $form = $this->createForm(InterEvType::class, $interEv);

        $idLane2 = dump($idLane);

        $val0 = $laneRepo->findOneBy(array('id' => $idLane2));
        $val = $inter->findBy(array('lane_id' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idInter'=>$val2->getId(),
                    'nameInter'=>$val2->getNameInterEv(),
                    'typeInter'=>$val2->getTypeInterEv(),
                    'topInter'=>$val2->getTopInterEv(),
                    'leftInter'=>$val2->getLeftInterEv(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);


        return $this->render('inter_ev/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
