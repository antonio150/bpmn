<?php

namespace App\Entity;

use App\Repository\StopEvRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StopEvRepository::class)]
class StopEv
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameStopEv = null;

    #[ORM\Column(length: 100)]
    private ?string $typeStop = null;

    #[ORM\Column]
    private ?int $topStopEv = null;

    #[ORM\Column]
    private ?int $leftStopEv = null;

    #[ORM\ManyToOne(inversedBy: 'stopEvs')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_id = null;

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameStopEv(): ?string
    {
        return $this->nameStopEv;
    }

    public function setNameStopEv(string $nameStopEv): self
    {
        $this->nameStopEv = $nameStopEv;

        return $this;
    }

    public function getTypeStop(): ?string
    {
        return $this->typeStop;
    }

    public function setTypeStop(string $typeStop): self
    {
        $this->typeStop = $typeStop;

        return $this;
    }

    public function getTopStopEv(): ?int
    {
        return $this->topStopEv;
    }

    public function setTopStopEv(int $topStopEv): self
    {
        $this->topStopEv = $topStopEv;

        return $this;
    }

    public function getLeftStopEv(): ?int
    {
        return $this->leftStopEv;
    }

    public function setLeftStopEv(int $leftStopEv): self
    {
        $this->leftStopEv = $leftStopEv;

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
