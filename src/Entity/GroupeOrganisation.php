<?php

namespace App\Entity;

use App\Repository\GroupeOrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GroupeOrganisationRepository::class)]
class GroupeOrganisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameGroupeOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $displaynameGroupeOrg = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descriptionNameGroupeOrg = null;

    #[ORM\ManyToOne(inversedBy: 'idGroupeOrg')]
    #[ORM\JoinColumn(name: "org_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Organisation $id_org = null;

    #[ORM\OneToMany(mappedBy: 'groupeOrg', targetEntity: UsersOrganisation::class, orphanRemoval: false)]
    private Collection $idUserOrga;

    public function __construct()
    {
        $this->idUserOrga = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameGroupeOrg(): ?string
    {
        return $this->nameGroupeOrg;
    }

    public function setNameGroupeOrg(string $nameGroupeOrg): self
    {
        $this->nameGroupeOrg = $nameGroupeOrg;

        return $this;
    }

    public function getDisplaynameGroupeOrg(): ?string
    {
        return $this->displaynameGroupeOrg;
    }

    public function setDisplaynameGroupeOrg(string $displaynameGroupeOrg): self
    {
        $this->displaynameGroupeOrg = $displaynameGroupeOrg;

        return $this;
    }

    public function getDescriptionNameGroupeOrg(): ?string
    {
        return $this->descriptionNameGroupeOrg;
    }

    public function setDescriptionNameGroupeOrg(?string $descriptionNameGroupeOrg): self
    {
        $this->descriptionNameGroupeOrg = $descriptionNameGroupeOrg;

        return $this;
    }

    public function getIdOrg(): ?Organisation
    {
        return $this->id_org;
    }

    public function setIdOrg(?Organisation $id_org): self
    {
        $this->id_org = $id_org;

        return $this;
    }

    public function __toString()
    {
        return $this->nameGroupeOrg;
    }

    /**
     * @return Collection<int, UsersOrganisation>
     */
    public function getIdUserOrga(): Collection
    {
        return $this->idUserOrga;
    }

    public function addIdUserOrga(UsersOrganisation $idUserOrga): self
    {
        if (!$this->idUserOrga->contains($idUserOrga)) {
            $this->idUserOrga->add($idUserOrga);
            $idUserOrga->setGroupeOrg($this);
        }

        return $this;
    }

    public function removeIdUserOrga(UsersOrganisation $idUserOrga): self
    {
        if ($this->idUserOrga->removeElement($idUserOrga)) {
            // set the owning side to null (unless already changed)
            if ($idUserOrga->getGroupeOrg() === $this) {
                $idUserOrga->setGroupeOrg(null);
            }
        }

        return $this;
    }
   
}
