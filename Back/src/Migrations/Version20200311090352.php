<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200311090352 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE trainer ADD vocation VARCHAR(255) NOT NULL, ADD height VARCHAR(255) NOT NULL, ADD weight VARCHAR(255) NOT NULL, ADD skin VARCHAR(255) NOT NULL, ADD eyes VARCHAR(255) NOT NULL, ADD hair VARCHAR(255) NOT NULL, ADD corpulence VARCHAR(255) NOT NULL, CHANGE wildpower willpower INT NOT NULL');
        $this->addSql('ALTER TABLE pokemon ADD `primary` VARCHAR(6) NOT NULL, ADD secondary VARCHAR(6) NOT NULL, ADD tertiary VARCHAR(6) NOT NULL, ADD quaternary VARCHAR(6) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE pokemon DROP `primary`, DROP secondary, DROP tertiary, DROP quaternary');
        $this->addSql('ALTER TABLE trainer DROP vocation, DROP height, DROP weight, DROP skin, DROP eyes, DROP hair, DROP corpulence, CHANGE willpower wildpower INT NOT NULL');
    }
}
