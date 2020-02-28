<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AvatarRepository")
 */
class Avatar
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $avatar_profil;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $avatar_game;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="avatar")
     */
    private $users;

    public function __construct() {

        $this->users = new ArrayCollection();
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

    public function getAvatarProfil(): ?string
    {
        return $this->avatar_profil;
    }

    public function setAvatarProfil(string $avatar_profil): self
    {
        $this->avatar_profil = $avatar_profil;

        return $this;
    }

    public function getAvatarGame(): ?string
    {
        return $this->avatar_game;
    }

    public function setAvatarGame(string $avatar_game): self
    {
        $this->avatar_game = $avatar_game;

        return $this;
    }

    /**
     * Get the value of users
     */ 
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Set the value of users
     *
     * @return  self
     */ 
    public function setUsers($users)
    {
        $this->users = $users;

        return $this;
    }
}
