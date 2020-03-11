<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PokemonRepository")
 */
class Pokemon
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $vitality;

    /**
     * @ORM\Column(type="integer")
     */
    private $strength;

    /**
     * @ORM\Column(type="integer")
     */
    private $endurance;

    /**
     * @ORM\Column(type="integer")
     */
    private $concentration;

    /**
     * @ORM\Column(type="integer")
     */
    private $willpower;

    /**
     * @ORM\Column(type="integer")
     */
    private $dexterity;

    /**
     * @ORM\Column(type="integer", options={"default":50})
     */
    private $energy;

    /**
     * @ORM\Column(type="integer", options={"default":0})
     */
    private $xp;

    /**
     * @ORM\Column(type="integer")
     */
    private $sprite;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Type", mappedBy="pokemons")
     */
    private $types;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Attack", mappedBy="pokemons")
     */
    private $attacks;

    /**
    * @ORM\Column(type="string", length=6, nullable=true)
    */
    private $primary;

    /**
    * @ORM\Column(type="string", length=6, nullable=true)
    */
    private $secondary;

    /**
    * @ORM\Column(type="string", length=6, nullable=true)
    */
    private $tertiary;

    /**
    * @ORM\Column(type="string", length=6, nullable=true)
    */
    private $quaternary;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
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

    public function getVitality(): ?int
    {
        return $this->vitality;
    }

    public function setVitality(int $vitality): self
    {
        $this->vitality = $vitality;

        return $this;
    }

    public function getStrength(): ?int
    {
        return $this->strength;
    }

    public function setStrength(int $strength): self
    {
        $this->strength = $strength;

        return $this;
    }

    public function getEndurance(): ?int
    {
        return $this->endurance;
    }

    public function setEndurance(int $endurance): self
    {
        $this->endurance = $endurance;

        return $this;
    }

    public function getConcentration(): ?int
    {
        return $this->concentration;
    }

    public function setConcentration(int $concentration): self
    {
        $this->concentration = $concentration;

        return $this;
    }

    public function getwillpower(): ?int
    {
        return $this->willpower;
    }

    public function setwillpower(int $willpower): self
    {
        $this->willpower = $willpower;

        return $this;
    }

    public function getDexterity(): ?int
    {
        return $this->dexterity;
    }

    public function setDexterity(int $dexterity): self
    {
        $this->dexterity = $dexterity;

        return $this;
    }

    public function getEnergy(): ?int
    {
        return $this->energy;
    }

    public function setEnergy(int $energy): self
    {
        $this->energy = $energy;

        return $this;
    }

    public function getXp(): ?int
    {
        return $this->xp;
    }

    public function setXp(int $xp): self
    {
        $this->xp = $xp;

        return $this;
    }

    public function getSprite(): ?int
    {
        return $this->sprite;
    }

    public function setSprite(int $sprite): self
    {
        $this->sprite = $sprite;

        return $this;
    }

    /**
     * Get the value of types
     */ 
    public function getTypes()
    {
        return $this->types;
    }

    /**
     * Set the value of types
     *
     * @return  self
     */ 
    public function setTypes($types)
    {
        $this->types = $types;

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

    /**
     * Get the value of primary
     */ 
    public function getPrimary()
    {
        return $this->primary;
    }

    /**
     * Set the value of primary
     *
     * @return  self
     */ 
    public function setPrimary($primary)
    {
        $this->primary = $primary;

        return $this;
    }

    /**
     * Get the value of secondary
     */ 
    public function getSecondary()
    {
        return $this->secondary;
    }

    /**
     * Set the value of secondary
     *
     * @return  self
     */ 
    public function setSecondary($secondary)
    {
        $this->secondary = $secondary;

        return $this;
    }

    /**
     * Get the value of tertiary
     */ 
    public function getTertiary()
    {
        return $this->tertiary;
    }

    /**
     * Set the value of tertiary
     *
     * @return  self
     */ 
    public function setTertiary($tertiary)
    {
        $this->tertiary = $tertiary;

        return $this;
    }

    /**
     * Get the value of quaternary
     */ 
    public function getQuaternary()
    {
        return $this->quaternary;
    }

    /**
     * Set the value of quaternary
     *
     * @return  self
     */ 
    public function setQuaternary($quaternary)
    {
        $this->quaternary = $quaternary;

        return $this;
    }
}
