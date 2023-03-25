<?php

namespace App\Entity;

use App\Repository\PoolRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\Cascade;

#[ORM\Entity(repositoryClass: PoolRepository::class)]
class Pool
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

   

    #[ORM\Column]
    private ?int $widthPool = null;

    #[ORM\Column]
    private ?int $heightPool = null;

    #[ORM\ManyToOne(inversedBy: 'pools_id')]
    #[ORM\JoinColumn(name: "org_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Organisation $organisation = null;

    #[ORM\OneToMany(mappedBy: 'pool', cascade:["persist", "remove"],targetEntity: Lane::class, orphanRemoval: false)]
    private Collection $laneId;

  

    public function __construct()
    {
        $this->laneId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    

    

    public function getWidthPool(): ?int
    {
        return $this->widthPool;
    }

    public function setWidthPool(int $widthPool): self
    {
        $this->widthPool = $widthPool;

        return $this;
    }

    public function getHeightPool(): ?int
    {
        return $this->heightPool;
    }

    public function setHeightPool(int $heightPool): self
    {
        $this->heightPool = $heightPool;

        return $this;
    }

    public function getOrganisation(): ?Organisation
    {
        return $this->organisation;
    }

    public function setOrganisation(?Organisation $organisation): self
    {
        $this->organisation = $organisation;

        return $this;
    }

    /**
     * @return Collection<int, Lane>
     */
    public function getLaneId(): Collection
    {
        return $this->laneId;
    }

    public function addLaneId(Lane $laneId): self
    {
        if (!$this->laneId->contains($laneId)) {
            $this->laneId->add($laneId);
            $laneId->setPool($this);
        }

        return $this;
    }

    public function removeLaneId(Lane $laneId): self
    {
        if ($this->laneId->removeElement($laneId)) {
            // set the owning side to null (unless already changed)
            if ($laneId->getPool() === $this) {
                $laneId->setPool(null);
            }
        }

        return $this;
    }

   
}
