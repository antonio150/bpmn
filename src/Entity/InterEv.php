<?php

namespace App\Entity;

use App\Repository\InterEvRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InterEvRepository::class)]
class InterEv
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameInter_Ev = null;

    #[ORM\Column(length: 100)]
    private ?string $typeInterEv = null;

    #[ORM\Column]
    private ?int $topInterEv = null;

    #[ORM\Column]
    private ?int $leftInterEv = null;

    #[ORM\ManyToOne(inversedBy: 'interEvs')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_id = null;

  

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameInterEv(): ?string
    {
        return $this->nameInter_Ev;
    }

    public function setNameInterEv(string $nameInter_Ev): self
    {
        $this->nameInter_Ev = $nameInter_Ev;

        return $this;
    }

    public function getTypeInterEv(): ?string
    {
        return $this->typeInterEv;
    }

    public function setTypeInterEv(string $typeInterEv): self
    {
        $this->typeInterEv = $typeInterEv;

        return $this;
    }

    public function getTopInterEv(): ?int
    {
        return $this->topInterEv;
    }

    public function setTopInterEv(int $topInterEv): self
    {
        $this->topInterEv = $topInterEv;

        return $this;
    }

    public function getLeftInterEv(): ?int
    {
        return $this->leftInterEv;
    }

    public function setLeftInterEv(int $leftInterEv): self
    {
        $this->leftInterEv = $leftInterEv;

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
