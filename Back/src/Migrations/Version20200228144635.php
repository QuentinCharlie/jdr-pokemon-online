<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200228144635 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE type_attack');
        $this->addSql('ALTER TABLE type ADD attacks_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE type ADD CONSTRAINT FK_8CDE5729F5336522 FOREIGN KEY (attacks_id) REFERENCES attack (id)');
        $this->addSql('CREATE INDEX IDX_8CDE5729F5336522 ON type (attacks_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE type_attack (type_id INT NOT NULL, attack_id INT NOT NULL, INDEX IDX_64174603F5315759 (attack_id), INDEX IDX_64174603C54C8C93 (type_id), PRIMARY KEY(type_id, attack_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE type_attack ADD CONSTRAINT FK_64174603C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE type_attack ADD CONSTRAINT FK_64174603F5315759 FOREIGN KEY (attack_id) REFERENCES attack (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE type DROP FOREIGN KEY FK_8CDE5729F5336522');
        $this->addSql('DROP INDEX IDX_8CDE5729F5336522 ON type');
        $this->addSql('ALTER TABLE type DROP attacks_id');
    }
}
