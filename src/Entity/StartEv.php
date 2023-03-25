<?php

namespace App\Entity;

use App\Repository\StartEvRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StartEvRepository::class)]
class StartEv
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameStart = null;

    #[ORM\Column(length: 100)]
    private ?string $typeStart = null;

    #[ORM\Column]
    private ?int $topStartEv = null;

    #[ORM\Column]
    private ?int $leftStartEv = null;

    #[ORM\ManyToOne(inversedBy: 'startEvs')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameStart(): ?string
    {
        return $this->nameStart;
    }

    public function setNameStart(string $nameStart): self
    {
        $this->nameStart = $nameStart;

        return $this;
    }

    public function getTypeStart(): ?string
    {
        return $this->typeStart;
    }

    public function setTypeStart(string $typeStart): self
    {
        $this->typeStart = $typeStart;

        return $this;
    }

    public function getTopStartEv(): ?int
    {
        return $this->topStartEv;
    }

    public function setTopStartEv(int $topStartEv): self
    {
        $this->topStartEv = $topStartEv;

        return $this;
    }

    public function getLeftStartEv(): ?int
    {
        return $this->leftStartEv;
    }

    public function setLeftStartEv(int $leftStartEv): self
    {
        $this->leftStartEv = $leftStartEv;

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
