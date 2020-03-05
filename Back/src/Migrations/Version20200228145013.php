<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200228145013 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE attack ADD type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE attack ADD CONSTRAINT FK_47C02D3BC54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('CREATE INDEX IDX_47C02D3BC54C8C93 ON attack (type_id)');
        $this->addSql('ALTER TABLE type DROP FOREIGN KEY FK_8CDE5729F5336522');
        $this->addSql('DROP INDEX IDX_8CDE5729F5336522 ON type');
        $this->addSql('ALTER TABLE type DROP attacks_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE attack DROP FOREIGN KEY FK_47C02D3BC54C8C93');
        $this->addSql('DROP INDEX IDX_47C02D3BC54C8C93 ON attack');
        $this->addSql('ALTER TABLE attack DROP type_id');
        $this->addSql('ALTER TABLE type ADD attacks_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE type ADD CONSTRAINT FK_8CDE5729F5336522 FOREIGN KEY (attacks_id) REFERENCES attack (id)');
        $this->addSql('CREATE INDEX IDX_8CDE5729F5336522 ON type (attacks_id)');
    }
}
