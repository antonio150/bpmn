<?php

namespace App\Controller;

use App\Entity\Task;
use App\Form\TaskType;
use App\Repository\LaneRepository;
use App\Repository\OrganisationRepository;
use App\Repository\TaskRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    #[Route('/task', name: 'app_task')]
    public function index(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
    ): Response
    {
        $taskOrg = new Task;
        $form = $this->createForm(TaskType::class, $taskOrg);

        // $idBtnOrg = dump($id);

        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
            $rec0 = $request->request->get('nameTask');
            $rec1 = $request->request->get('typeTask');
            $rec2 = $request->request->get('topTask');
            $rec3 = $request->request->get('leftTask');
            $rec4 = $request->request->get('laneId');

            $val = $laneRepo->findOneBy(array('id' => $rec4));

            $taskOrg = $form->getData();
            // $taskOrg->setIdOrg( $val);
            $taskOrg->setNameTask( $rec0);
            $taskOrg->setTypeTask( $rec1);
            $taskOrg->setTopTask( $rec2);
            $taskOrg->setLeftTask( $rec3);
            $taskOrg->setLaneId( $val);

            $manager->persist($taskOrg);
            $manager->flush();
        }

        return $this->render('task/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/task/get/{idLane}', name: 'app_task.get')]
    public function getTaskSave(
        Request $request,
        EntityManagerInterface $manager,
        LaneRepository $laneRepo,
        TaskRepository $taskRepo,
        $idLane,
    ): Response
    {
        $taskOrg = new Task;
        $form = $this->createForm(TaskType::class, $taskOrg);

        $idLane2 = dump($idLane);

        $val0 = $laneRepo->findOneBy(array('id' => $idLane2));
        $val = $taskRepo->findBy(array('lane_id' => $val0));

    //    dd($val);
        $jsonData = array();
        
        if($request->isXmlHttpRequest() || $request->query->get('showJson')==1){
           
            $idx = 0;
            foreach($val as $val2){
                $temp = array(
                    'idTask'=>$val2->getId(),
                    'nameTask'=>$val2->getNameTask(),
                    'typeTask'=>$val2->getTypeTask(),
                    'topTask'=>$val2->getTopTask(),
                    'leftTask'=>$val2->getLeftTask(),

                );
                $jsonData[$idx++] = $temp;
                }
            }
            return new JsonResponse($jsonData);


        return $this->render('task/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
