<?php

namespace App\Entity;

use App\Repository\OrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrganisationRepository::class)]
class Organisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameOrganisation = null;

    #[ORM\OneToMany(mappedBy: 'idOrg',cascade:["persist", "remove"], targetEntity: UsersOrganisation::class, orphanRemoval: false)]
    private Collection $IdUsersOrg;

    #[ORM\OneToMany(mappedBy: 'orgId',cascade:["persist", "remove"], targetEntity: RolesOrganisation::class, orphanRemoval: false)]
    private Collection $idRolesOrg;

    #[ORM\OneToMany(mappedBy: 'id_org',cascade:["persist", "remove"], targetEntity: GroupeOrganisation::class, orphanRemoval: false)]
    private Collection $idGroupeOrg;

   
    #[ORM\OneToMany(mappedBy: 'organisation',cascade:["persist", "remove"], targetEntity: Pool::class, orphanRemoval: false)]
    private Collection $pools_id;

  


    public function __construct()
    {
        $this->IdUsersOrg = new ArrayCollection();
        $this->idRolesOrg = new ArrayCollection();
        $this->idGroupeOrg = new ArrayCollection();
        $this->flow_id = new ArrayCollection();
        $this->gateway_id = new ArrayCollection();
        $this->interEv_Id = new ArrayCollection();
        $this->lane_id = new ArrayCollection();
        $this->pools_id = new ArrayCollection();
        $this->startEv_Id = new ArrayCollection();
        $this->stopEv_Id = new ArrayCollection();
        $this->task_Id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameOrganisation(): ?string
    {
        return $this->nameOrganisation;
    }

    public function setNameOrganisation(string $nameOrganisation): self
    {
        $this->nameOrganisation = $nameOrganisation;

        return $this;
    }

    /**
     * @return Collection<int, UsersOrganisation>
     */
    public function getIdUsersOrg(): Collection
    {
        return $this->IdUsersOrg;
    }

    public function addIdUsersOrg(UsersOrganisation $idUsersOrg): self
    {
        if (!$this->IdUsersOrg->contains($idUsersOrg)) {
            $this->IdUsersOrg->add($idUsersOrg);
            $idUsersOrg->setIdOrg($this);
        }

        return $this;
    }

    public function removeIdUsersOrg(UsersOrganisation $idUsersOrg): self
    {
        if ($this->IdUsersOrg->removeElement($idUsersOrg)) {
            // set the owning side to null (unless already changed)
            if ($idUsersOrg->getIdOrg() === $this) {
                $idUsersOrg->setIdOrg(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, RolesOrganisation>
     */
    public function getIdRolesOrg(): Collection
    {
        return $this->idRolesOrg;
    }

    public function addIdRolesOrg(RolesOrganisation $idRolesOrg): self
    {
        if (!$this->idRolesOrg->contains($idRolesOrg)) {
            $this->idRolesOrg->add($idRolesOrg);
            $idRolesOrg->setOrgId($this);
        }

        return $this;
    }

    public function removeIdRolesOrg(RolesOrganisation $idRolesOrg): self
    {
        if ($this->idRolesOrg->removeElement($idRolesOrg)) {
            // set the owning side to null (unless already changed)
            if ($idRolesOrg->getOrgId() === $this) {
                $idRolesOrg->setOrgId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, GroupeOrganisation>
     */
    public function getIdGroupeOrg(): Collection
    {
        return $this->idGroupeOrg;
    }

    public function addIdGroupeOrg(GroupeOrganisation $idGroupeOrg): self
    {
        if (!$this->idGroupeOrg->contains($idGroupeOrg)) {
            $this->idGroupeOrg->add($idGroupeOrg);
            $idGroupeOrg->setIdOrg($this);
        }

        return $this;
    }

    public function removeIdGroupeOrg(GroupeOrganisation $idGroupeOrg): self
    {
        if ($this->idGroupeOrg->removeElement($idGroupeOrg)) {
            // set the owning side to null (unless already changed)
            if ($idGroupeOrg->getIdOrg() === $this) {
                $idGroupeOrg->setIdOrg($this);
            }
        }

        return $this;
    }

    

   
    

    /**
     * @return Collection<int, Pool>
     */
    public function getPoolsId(): Collection
    {
        return $this->pools_id;
    }

    public function addPoolsId(Pool $poolsId): self
    {
        if (!$this->pools_id->contains($poolsId)) {
            $this->pools_id->add($poolsId);
            $poolsId->setOrganisation($this);
        }

        return $this;
    }

    public function removePoolsId(Pool $poolsId): self
    {
        if ($this->pools_id->removeElement($poolsId)) {
            // set the owning side to null (unless already changed)
            if ($poolsId->getOrganisation() === $this) {
                $poolsId->setOrganisation(null);
            }
        }

        return $this;
    }

    



    

   
}
