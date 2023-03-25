<?php

namespace App\Entity;

use App\Repository\FlowRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FlowRepository::class)]
class Flow
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameFlow = null;

    #[ORM\Column]
    private ?int $initX = null;

    #[ORM\Column]
    private ?int $initY = null;

    #[ORM\Column(length: 255)]
    private ?string $initName = null;

    #[ORM\Column]
    private ?int $endX = null;

    #[ORM\Column]
    private ?int $endY = null;

    #[ORM\Column(length: 255)]
    private ?string $endName = null;

    #[ORM\ManyToOne(inversedBy: 'flowId')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_Id = null;

   
    public function __construct()
    {
        $this->orgId = new ArrayCollection();
    }

  

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameFlow(): ?string
    {
        return $this->nameFlow;
    }

    public function setNameFlow(string $nameFlow): self
    {
        $this->nameFlow = $nameFlow;

        return $this;
    }

    public function getInitX(): ?int
    {
        return $this->initX;
    }

    public function setInitX(int $initX): self
    {
        $this->initX = $initX;

        return $this;
    }

    public function getInitY(): ?int
    {
        return $this->initY;
    }

    public function setInitY(int $initY): self
    {
        $this->initY = $initY;

        return $this;
    }

    public function getInitName(): ?string
    {
        return $this->initName;
    }

    public function setInitName(string $initName): self
    {
        $this->initName = $initName;

        return $this;
    }

    public function getEndX(): ?int
    {
        return $this->endX;
    }

    public function setEndX(int $endX): self
    {
        $this->endX = $endX;

        return $this;
    }

    public function getEndY(): ?int
    {
        return $this->endY;
    }

    public function setEndY(int $endY): self
    {
        $this->endY = $endY;

        return $this;
    }

    public function getEndName(): ?string
    {
        return $this->endName;
    }

    public function setEndName(string $endName): self
    {
        $this->endName = $endName;

        return $this;
    }

    public function getLaneId(): ?Lane
    {
        return $this->lane_Id;
    }

    public function setLaneId(?Lane $lane_Id): self
    {
        $this->lane_Id = $lane_Id;

        return $this;
    }

   

   
}
