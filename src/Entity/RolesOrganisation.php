<?php

namespace App\Entity;

use App\Repository\RolesOrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RolesOrganisationRepository::class)]
class RolesOrganisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $namesRolesOrg = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $displaynameRolesOrg = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descriptionRolesOrg = null;

    #[ORM\ManyToOne(inversedBy: 'idRolesOrg')]
    #[ORM\JoinColumn(name: "org_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Organisation $orgId = null;

    #[ORM\OneToMany(mappedBy: 'rolesOrga', targetEntity: UsersOrganisation::class)]
    private Collection $usersOrga;

    public function __construct()
    {
        $this->usersOrga = new ArrayCollection();
    }

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNamesRolesOrg(): ?string
    {
        return $this->namesRolesOrg;
    }

    public function setNamesRolesOrg(string $namesRolesOrg): self
    {
        $this->namesRolesOrg = $namesRolesOrg;

        return $this;
    }

    public function getDisplaynameRolesOrg(): ?string
    {
        return $this->displaynameRolesOrg;
    }

    public function setDisplaynameRolesOrg(?string $displaynameRolesOrg): self
    {
        $this->displaynameRolesOrg = $displaynameRolesOrg;

        return $this;
    }

    public function getDescriptionRolesOrg(): ?string
    {
        return $this->descriptionRolesOrg;
    }

    public function setDescriptionRolesOrg(?string $descriptionRolesOrg): self
    {
        $this->descriptionRolesOrg = $descriptionRolesOrg;

        return $this;
    }

    public function getOrgId(): ?Organisation
    {
        return $this->orgId;
    }

    public function setOrgId(?Organisation $orgId): self
    {
        $this->orgId = $orgId;

        return $this;
    }

    /**
     * @return Collection<int, UsersOrganisation>
     */
    public function getUsersOrga(): Collection
    {
        return $this->usersOrga;
    }

    public function addUsersOrga(UsersOrganisation $usersOrga): self
    {
        if (!$this->usersOrga->contains($usersOrga)) {
            $this->usersOrga->add($usersOrga);
            $usersOrga->setRolesOrga($this);
        }

        return $this;
    }

    public function removeUsersOrga(UsersOrganisation $usersOrga): self
    {
        if ($this->usersOrga->removeElement($usersOrga)) {
            // set the owning side to null (unless already changed)
            if ($usersOrga->getRolesOrga() === $this) {
                $usersOrga->setRolesOrga(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->namesRolesOrg;
    }

   
}
