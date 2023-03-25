<?php

namespace App\Entity;

use App\Repository\UsersOrganisationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsersOrganisationRepository::class)]
class UsersOrganisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $usernameUsersOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $passwordUsersOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $titleUsersOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $firstnameUsersOrg = null;

    #[ORM\Column(length: 255)]
    private ?string $lastnameUsersOrg = null;

   

    #[ORM\ManyToOne(inversedBy: 'IdUsersOrg')]
    #[ORM\JoinColumn(name: "org_id", referencedColumnName: "id", onDelete:"CASCADE",nullable: false)]
    private ?Organisation $idOrg = null;

    #[ORM\ManyToOne(inversedBy: 'idUserOrga')]
    #[ORM\JoinColumn(nullable: false)]
    private ?GroupeOrganisation $groupeOrg = null;

    #[ORM\ManyToOne(inversedBy: 'usersOrga')]
    private ?RolesOrganisation $rolesOrga = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsernameUsersOrg(): ?string
    {
        return $this->usernameUsersOrg;
    }

    public function setUsernameUsersOrg(?string $usernameUsersOrg): self
    {
        $this->usernameUsersOrg = $usernameUsersOrg;

        return $this;
    }

    public function getPasswordUsersOrg(): ?string
    {
        return $this->passwordUsersOrg;
    }

    public function setPasswordUsersOrg(string $passwordUsersOrg): self
    {
        $this->passwordUsersOrg = $passwordUsersOrg;

        return $this;
    }

    public function getTitleUsersOrg(): ?string
    {
        return $this->titleUsersOrg;
    }

    public function setTitleUsersOrg(string $titleUsersOrg): self
    {
        $this->titleUsersOrg = $titleUsersOrg;

        return $this;
    }

    public function getFirstnameUsersOrg(): ?string
    {
        return $this->firstnameUsersOrg;
    }

    public function setFirstnameUsersOrg(string $firstnameUsersOrg): self
    {
        $this->firstnameUsersOrg = $firstnameUsersOrg;

        return $this;
    }

    public function getLastnameUsersOrg(): ?string
    {
        return $this->lastnameUsersOrg;
    }

    public function setLastnameUsersOrg(string $lastnameUsersOrg): self
    {
        $this->lastnameUsersOrg = $lastnameUsersOrg;

        return $this;
    }

   

    public function getIdOrg(): ?Organisation
    {
        return $this->idOrg;
    }

    public function setIdOrg(?Organisation $idOrg): self
    {
        $this->idOrg = $idOrg;

        return $this;
    }

    public function getGroupeOrg(): ?GroupeOrganisation
    {
        return $this->groupeOrg;
    }

    public function setGroupeOrg(?GroupeOrganisation $groupeOrg): self
    {
        $this->groupeOrg = $groupeOrg;

        return $this;
    }

    public function getRolesOrga(): ?RolesOrganisation
    {
        return $this->rolesOrga;
    }

    public function setRolesOrga(?RolesOrganisation $rolesOrga): self
    {
        $this->rolesOrga = $rolesOrga;

        return $this;
    }

   
   
}
