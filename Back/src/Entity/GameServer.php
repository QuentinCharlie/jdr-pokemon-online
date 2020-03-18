<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameServerRepository")
 */
class GameServer
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     */
    private $port;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $MJ;

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of port
     */ 
    public function getPort()
    {
        return $this->port;
    }

    /**
     * Set the value of port
     *
     * @return  self
     */ 
    public function setPort($port)
    {
        $this->port = $port;

        return $this;
    }

    /**
     * Get the value of MJ
     */ 
    public function getMJ()
    {
        return $this->MJ;
    }

    /**
     * Set the value of MJ
     *
     * @return  self
     */ 
    public function setMJ($MJ)
    {
        $this->MJ = $MJ;

        return $this;
    }
} 