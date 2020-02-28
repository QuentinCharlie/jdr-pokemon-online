<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeRepository")
 */
class Type
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
    private $color;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Pokemon", inversedBy="types")
     */
    private $pokemons;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Attack", inversedBy="type")
     */
    private $attacks;

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

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get the value of pokemons
     */ 
    public function getPokemons()
    {
        return $this->pokemons;
    }

    /**
     * Set the value of pokemons
     *
     * @return  self
     */ 
    public function setPokemons($pokemons)
    {
        $this->pokemons = $pokemons;

        return $this;
    }

    /**
     * Get the value of attacks
     */ 
    public function getAttacks()
    {
        return $this->attacks;
    }

    /**
     * Set the value of attacks
     *
     * @return  self
     */ 
    public function setAttacks($attacks)
    {
        $this->attacks = $attacks;

        return $this;
    }
}
