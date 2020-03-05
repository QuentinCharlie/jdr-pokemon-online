<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302084112 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE pokemon_has_attack (pokemon_name VARCHAR(255) NOT NULL, attack_id INT NOT NULL, INDEX IDX_B9DE56B7628A0045 (pokemon_name), UNIQUE INDEX UNIQ_B9DE56B7F5315759 (attack_id), PRIMARY KEY(pokemon_name, attack_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pokemon_has_attack ADD CONSTRAINT FK_B9DE56B7628A0045 FOREIGN KEY (pokemon_name) REFERENCES pokemon (name)');
        $this->addSql('ALTER TABLE pokemon_has_attack ADD CONSTRAINT FK_B9DE56B7F5315759 FOREIGN KEY (attack_id) REFERENCES attack (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE pokemon_has_attack');
    }
}
