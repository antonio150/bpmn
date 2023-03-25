<?php

namespace App\Entity;

use App\Repository\GatewayRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GatewayRepository::class)]
class Gateway
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameGateway = null;

    #[ORM\Column(length: 100)]
    private ?string $typeGateway = null;

    #[ORM\Column]
    private ?int $topGateway = null;

    #[ORM\Column]
    private ?int $leftGateway = null;

    #[ORM\ManyToOne(inversedBy: 'gateways')]
    #[ORM\JoinColumn(name: "lane_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Lane $lane_id = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameGateway(): ?string
    {
        return $this->nameGateway;
    }

    public function setNameGateway(string $nameGateway): self
    {
        $this->nameGateway = $nameGateway;

        return $this;
    }

    public function getTypeGateway(): ?string
    {
        return $this->typeGateway;
    }

    public function setTypeGateway(string $typeGateway): self
    {
        $this->typeGateway = $typeGateway;

        return $this;
    }

    public function getTopGateway(): ?int
    {
        return $this->topGateway;
    }

    public function setTopGateway(int $topGateway): self
    {
        $this->topGateway = $topGateway;

        return $this;
    }

    public function getLeftGateway(): ?int
    {
        return $this->leftGateway;
    }

    public function setLeftGateway(int $leftGateway): self
    {
        $this->leftGateway = $leftGateway;

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
