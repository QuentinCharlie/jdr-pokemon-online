<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TrainerRepository")
 */
class Trainer
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
    private $gender;

    /**
     * @ORM\Column(type="integer")
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $eyesColor;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $skinColor;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hairColor;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $corpulence;

    /**
     * @ORM\Column(type="integer")
     */
    private $size;

    /**
     * @ORM\Column(type="integer")
     */
    private $weight;

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
    private $wildpower;

    /**
     * @ORM\Column(type="integer")
     */
    private $dexterity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $do_it_yourself;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $charisma;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $fighting;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $driving;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $detection;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $furtivity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $expression;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $phychology;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $sport;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $survival;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $education;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $geography;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $computer_science;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $legend;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $medicine;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $pkmn_medicine;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nature;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $phyche;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $science;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $pokelogy;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $avatar;

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

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

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

    public function getWildpower(): ?int
    {
        return $this->wildpower;
    }

    public function setWildpower(int $wildpower): self
    {
        $this->wildpower = $wildpower;

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

    public function getDoItYourself(): ?int
    {
        return $this->do_it_yourself;
    }

    public function setDoItYourself(?int $do_it_yourself): self
    {
        $this->do_it_yourself = $do_it_yourself;

        return $this;
    }

    public function getCharisma(): ?int
    {
        return $this->charisma;
    }

    public function setCharisma(?int $charisma): self
    {
        $this->charisma = $charisma;

        return $this;
    }

    public function getFighting(): ?int
    {
        return $this->fighting;
    }

    public function setFighting(?int $fighting): self
    {
        $this->fighting = $fighting;

        return $this;
    }

    public function getDriving(): ?int
    {
        return $this->driving;
    }

    public function setDriving(?int $driving): self
    {
        $this->driving = $driving;

        return $this;
    }

    public function getDetection(): ?int
    {
        return $this->detection;
    }

    public function setDetection(?int $detection): self
    {
        $this->detection = $detection;

        return $this;
    }

    public function getFurtivity(): ?int
    {
        return $this->furtivity;
    }

    public function setFurtivity(?int $furtivity): self
    {
        $this->furtivity = $furtivity;

        return $this;
    }

    public function getExpression(): ?int
    {
        return $this->expression;
    }

    public function setExpression(?int $expression): self
    {
        $this->expression = $expression;

        return $this;
    }

    public function getPhychology(): ?int
    {
        return $this->phychology;
    }

    public function setPhychology(?int $phychology): self
    {
        $this->phychology = $phychology;

        return $this;
    }

    public function getSport(): ?int
    {
        return $this->sport;
    }

    public function setSport(?int $sport): self
    {
        $this->sport = $sport;

        return $this;
    }

    public function getSurvival(): ?int
    {
        return $this->survival;
    }

    public function setSurvival(?int $survival): self
    {
        $this->survival = $survival;

        return $this;
    }

    public function getEducation(): ?int
    {
        return $this->education;
    }

    public function setEducation(?int $education): self
    {
        $this->education = $education;

        return $this;
    }

    public function getGeography(): ?int
    {
        return $this->geography;
    }

    public function setGeography(?int $geography): self
    {
        $this->geography = $geography;

        return $this;
    }

    public function getComputerScience(): ?int
    {
        return $this->computer_science;
    }

    public function setComputerScience(?int $computer_science): self
    {
        $this->computer_science = $computer_science;

        return $this;
    }

    public function getLegend(): ?int
    {
        return $this->legend;
    }

    public function setLegend(?int $legend): self
    {
        $this->legend = $legend;

        return $this;
    }

    public function getMedicine(): ?int
    {
        return $this->medicine;
    }

    public function setMedicine(?int $medicine): self
    {
        $this->medicine = $medicine;

        return $this;
    }

    public function getPkmnMedicine(): ?int
    {
        return $this->pkmn_medicine;
    }

    public function setPkmnMedicine(?int $pkmn_medicine): self
    {
        $this->pkmn_medicine = $pkmn_medicine;

        return $this;
    }

    public function getNature(): ?int
    {
        return $this->nature;
    }

    public function setNature(?int $nature): self
    {
        $this->nature = $nature;

        return $this;
    }

    public function getPhyche(): ?int
    {
        return $this->phyche;
    }

    public function setPhyche(?int $phyche): self
    {
        $this->phyche = $phyche;

        return $this;
    }

    public function getScience(): ?int
    {
        return $this->science;
    }

    public function setScience(?int $science): self
    {
        $this->science = $science;

        return $this;
    }

    public function getPokelogy(): ?int
    {
        return $this->pokelogy;
    }

    public function setPokelogy(?int $pokelogy): self
    {
        $this->pokelogy = $pokelogy;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * Get the value of eyesColor
     */ 
    public function getEyesColor()
    {
        return $this->eyesColor;
    }

    /**
     * Set the value of eyesColor
     *
     * @return  self
     */ 
    public function setEyesColor($eyesColor)
    {
        $this->eyesColor = $eyesColor;

        return $this;
    }

    /**
     * Get the value of skinColor
     */ 
    public function getSkinColor()
    {
        return $this->skinColor;
    }

    /**
     * Set the value of skinColor
     *
     * @return  self
     */ 
    public function setSkinColor($skinColor)
    {
        $this->skinColor = $skinColor;

        return $this;
    }

    /**
     * Get the value of hairColor
     */ 
    public function getHairColor()
    {
        return $this->hairColor;
    }

    /**
     * Set the value of hairColor
     *
     * @return  self
     */ 
    public function setHairColor($hairColor)
    {
        $this->hairColor = $hairColor;

        return $this;
    }

    /**
     * Get the value of corpulence
     */ 
    public function getCorpulence()
    {
        return $this->corpulence;
    }

    /**
     * Set the value of corpulence
     *
     * @return  self
     */ 
    public function setCorpulence($corpulence)
    {
        $this->corpulence = $corpulence;

        return $this;
    }

    /**
     * Get the value of size
     */ 
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set the value of size
     *
     * @return  self
     */ 
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get the value of weight
     */ 
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set the value of weight
     *
     * @return  self
     */ 
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }
}
