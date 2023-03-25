<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
class Task
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameTask = null;

    #[ORM\Column(length: 100)]
    private ?string $typeTask = null;

    #[ORM\Column]
    private ?int $topTask = null;

    #[ORM\Column]
    private ?int $leftTask = null;

    #[ORM\ManyToOne(inversedBy: 'tasks')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_id = null;

   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameTask(): ?string
    {
        return $this->nameTask;
    }

    public function setNameTask(string $nameTask): self
    {
        $this->nameTask = $nameTask;

        return $this;
    }

    public function getTypeTask(): ?string
    {
        return $this->typeTask;
    }

    public function setTypeTask(string $typeTask): self
    {
        $this->typeTask = $typeTask;

        return $this;
    }

    public function getTopTask(): ?int
    {
        return $this->topTask;
    }

    public function setTopTask(int $topTask): self
    {
        $this->topTask = $topTask;

        return $this;
    }

    public function getLeftTask(): ?int
    {
        return $this->leftTask;
    }

    public function setLeftTask(int $leftTask): self
    {
        $this->leftTask = $leftTask;

        return $this;
    }

    public function getLaneId(): ?Lane
    {
        return $this->lane_id;
    }

    public function setLaneId(?Lane $lane_id): self
    {
        $this->lane_id = $lane_id;

        return $this;
    }

  
}
