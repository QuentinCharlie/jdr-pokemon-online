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

     /**
     * @ORM\Column(type="text")
     */
    private $background;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $vocation;
    
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $height;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $weight;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $skin;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $eyes;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hair;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $corpulence;

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

    public function getWillpower(): ?int
    {
        return $this->willpower;
    }

    public function setWillpower(int $willpower): self
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
     * Get the value of background
     */ 
    public function getBackground()
    {
        return $this->background;
    }

    /**
     * Set the value of background
     *
     * @return  self
     */ 
    public function setBackground($background)
    {
        $this->background = $background;

        return $this;
    }

    /**
     * Get the value of vocation
     */ 
    public function getVocation()
    {
        return $this->vocation;
    }

    /**
     * Set the value of vocation
     *
     * @return  self
     */ 
    public function setVocation($vocation)
    {
        $this->vocation = $vocation;

        return $this;
    }

    /**
     * Get the value of height
     */ 
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * Set the value of height
     *
     * @return  self
     */ 
    public function setHeight($height)
    {
        $this->height = $height;

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

    /**
     * Get the value of skin
     */ 
    public function getSkin()
    {
        return $this->skin;
    }

    /**
     * Set the value of skin
     *
     * @return  self
     */ 
    public function setSkin($skin)
    {
        $this->skin = $skin;

        return $this;
    }

    /**
     * Get the value of eyes
     */ 
    public function getEyes()
    {
        return $this->eyes;
    }

    /**
     * Set the value of eyes
     *
     * @return  self
     */ 
    public function setEyes($eyes)
    {
        $this->eyes = $eyes;

        return $this;
    }

    /**
     * Get the value of hair
     */ 
    public function getHair()
    {
        return $this->hair;
    }

    /**
     * Set the value of hair
     *
     * @return  self
     */ 
    public function setHair($hair)
    {
        $this->hair = $hair;

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
}
