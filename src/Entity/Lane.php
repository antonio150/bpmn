<?php

namespace App\Entity;

use App\Repository\LaneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LaneRepository::class)]
class Lane
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nameLane = null;

  

    #[ORM\Column]
    private ?int $widthLane = null;

    #[ORM\Column]
    private ?int $heightLane = null;

    #[ORM\ManyToOne(inversedBy: 'laneId')]
    #[ORM\JoinColumn(name: "pool_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Pool $pool = null;

    #[ORM\OneToMany(mappedBy: 'lane_Id',cascade:["persist", "remove"], targetEntity: Flow::class)]
    private Collection $flowId;

    #[ORM\OneToMany(mappedBy: 'lane_id',cascade:["persist", "remove"], targetEntity: Gateway::class)]
    private Collection $gateways;

    #[ORM\OneToMany(mappedBy: 'lane_id',cascade:["persist", "remove"], targetEntity: InterEv::class)]
    private Collection $interEvs;

    #[ORM\OneToMany(mappedBy: 'lane_id',cascade:["persist", "remove"], targetEntity: StartEv::class)]
    private Collection $startEvs;

    #[ORM\OneToMany(mappedBy: 'lane_id',cascade:["persist", "remove"], targetEntity: StopEv::class)]
    private Collection $stopEvs;

    #[ORM\OneToMany(mappedBy: 'lane_id',cascade:["persist", "remove"], targetEntity: Task::class)]
    private Collection $tasks;


    public function __construct()
    {
        $this->idPool = new ArrayCollection();
        $this->flowId = new ArrayCollection();
        $this->gateways = new ArrayCollection();
        $this->interEvs = new ArrayCollection();
        $this->startEvs = new ArrayCollection();
        $this->stopEvs = new ArrayCollection();
        $this->tasks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameLane(): ?string
    {
        return $this->nameLane;
    }

    public function setNameLane(string $nameLane): self
    {
        $this->nameLane = $nameLane;

        return $this;
    }

   

    public function getWidthLane(): ?int
    {
        return $this->widthLane;
    }

    public function setWidthLane(int $widthLane): self
    {
        $this->widthLane = $widthLane;

        return $this;
    }

    public function getHeightLane(): ?int
    {
        return $this->heightLane;
    }

    public function setHeightLane(int $heightLane): self
    {
        $this->heightLane = $heightLane;

        return $this;
    }

    public function getPool(): ?Pool
    {
        return $this->pool;
    }

    public function setPool(?Pool $pool): self
    {
        $this->pool = $pool;

        return $this;
    }

    /**
     * @return Collection<int, Flow>
     */
    public function getFlowId(): Collection
    {
        return $this->flowId;
    }

    public function addFlowId(Flow $flowId): self
    {
        if (!$this->flowId->contains($flowId)) {
            $this->flowId->add($flowId);
            $flowId->setLaneId($this);
        }

        return $this;
    }

    public function removeFlowId(Flow $flowId): self
    {
        if ($this->flowId->removeElement($flowId)) {
            // set the owning side to null (unless already changed)
            if ($flowId->getLaneId() === $this) {
                $flowId->setLaneId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Gateway>
     */
    public function getGateways(): Collection
    {
        return $this->gateways;
    }

    public function addGateway(Gateway $gateway): self
    {
        if (!$this->gateways->contains($gateway)) {
            $this->gateways->add($gateway);
            $gateway->setLaneId($this);
        }

        return $this;
    }

    public function removeGateway(Gateway $gateway): self
    {
        if ($this->gateways->removeElement($gateway)) {
            // set the owning side to null (unless already changed)
            if ($gateway->getLaneId() === $this) {
                $gateway->setLaneId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, InterEv>
     */
    public function getInterEvs(): Collection
    {
        return $this->interEvs;
    }

    public function addInterEv(InterEv $interEv): self
    {
        if (!$this->interEvs->contains($interEv)) {
            $this->interEvs->add($interEv);
            $interEv->setLaneId($this);
        }

        return $this;
    }

    public function removeInterEv(InterEv $interEv): self
    {
        if ($this->interEvs->removeElement($interEv)) {
            // set the owning side to null (unless already changed)
            if ($interEv->getLaneId() === $this) {
                $interEv->setLaneId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, StartEv>
     */
    public function getStartEvs(): Collection
    {
        return $this->startEvs;
    }

    public function addStartEv(StartEv $startEv): self
    {
        if (!$this->startEvs->contains($startEv)) {
            $this->startEvs->add($startEv);
            $startEv->setLaneId($this);
        }

        return $this;
    }

    public function removeStartEv(StartEv $startEv): self
    {
        if ($this->startEvs->removeElement($startEv)) {
            // set the owning side to null (unless already changed)
            if ($startEv->getLaneId() === $this) {
                $startEv->setLaneId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, StopEv>
     */
    public function getStopEvs(): Collection
    {
        return $this->stopEvs;
    }

    public function addStopEv(StopEv $stopEv): self
    {
        if (!$this->stopEvs->contains($stopEv)) {
            $this->stopEvs->add($stopEv);
            $stopEv->setLaneId($this);
        }

        return $this;
    }

    public function removeStopEv(StopEv $stopEv): self
    {
        if ($this->stopEvs->removeElement($stopEv)) {
            // set the owning side to null (unless already changed)
            if ($stopEv->getLaneId() === $this) {
                $stopEv->setLaneId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
            $task->setLaneId($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getLaneId() === $this) {
                $task->setLaneId(null);
            }
        }

        return $this;
    }

    
}
