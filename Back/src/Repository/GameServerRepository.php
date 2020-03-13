<?php

namespace App\Repository;

use App\Entity\GameServer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GameServer|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameServer|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameServer[]    findAll()
 * @method GameServer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameServerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameServer::class);
    }

    public function findAllPort()
    {
        $queryBuilder = $this->getEntityManager()->createQueryBuilder();

        $queryBuilder->select('p.port')
            ->from(GameServer::class, 'p')
            ->getQuery()
            ->getResult();

        dd($queryBuilder);

      
    }

    // /**
    //  * @return GameServer[] Returns an array of GameServer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GameServer
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
