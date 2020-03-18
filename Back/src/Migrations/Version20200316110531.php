<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200316110531 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE avatar (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, avatar_profil VARCHAR(255) NOT NULL, avatar_game VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, avatar_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, nickname VARCHAR(255) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D64986383B10 (avatar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pokemon (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, name VARCHAR(255) NOT NULL, vitality INT NOT NULL, strength INT NOT NULL, endurance INT NOT NULL, concentration INT NOT NULL, willpower INT NOT NULL, dexterity INT NOT NULL, energy INT DEFAULT 50 NOT NULL, xp INT DEFAULT 0 NOT NULL, sprite INT NOT NULL, `primary` VARCHAR(6) DEFAULT NULL, secondary VARCHAR(6) DEFAULT NULL, tertiary VARCHAR(6) DEFAULT NULL, quaternary VARCHAR(6) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game_server (port INT NOT NULL, mj VARCHAR(255) DEFAULT NULL, PRIMARY KEY(port)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE attack (id INT AUTO_INCREMENT NOT NULL, type_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, energy INT NOT NULL, category VARCHAR(255) NOT NULL, distance VARCHAR(255) NOT NULL, accuracy INT NOT NULL, damage INT NOT NULL, effect VARCHAR(255) DEFAULT NULL, INDEX IDX_47C02D3BC54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE attack_pokemon (attack_id INT NOT NULL, pokemon_id INT NOT NULL, INDEX IDX_9B62FC14F5315759 (attack_id), INDEX IDX_9B62FC142FE71C3E (pokemon_id), PRIMARY KEY(attack_id, pokemon_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE inventory (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, price INT NOT NULL, description VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, INDEX IDX_B12D4A3612469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trainer (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, gender VARCHAR(255) NOT NULL, age INT NOT NULL, vitality INT NOT NULL, strength INT NOT NULL, endurance INT NOT NULL, concentration INT NOT NULL, willpower INT NOT NULL, dexterity INT NOT NULL, do_it_yourself INT DEFAULT NULL, charisma INT DEFAULT NULL, fighting INT DEFAULT NULL, driving INT DEFAULT NULL, detection INT DEFAULT NULL, furtivity INT DEFAULT NULL, expression INT DEFAULT NULL, phychology INT DEFAULT NULL, sport INT DEFAULT NULL, survival INT DEFAULT NULL, education INT DEFAULT NULL, geography INT DEFAULT NULL, computer_science INT DEFAULT NULL, legend INT DEFAULT NULL, medicine INT DEFAULT NULL, pkmn_medicine INT DEFAULT NULL, nature INT DEFAULT NULL, phyche INT DEFAULT NULL, science INT DEFAULT NULL, pokelogy INT DEFAULT NULL, avatar VARCHAR(255) NOT NULL, background LONGTEXT NOT NULL, vocation VARCHAR(255) NOT NULL, height VARCHAR(255) NOT NULL, weight VARCHAR(255) NOT NULL, skin VARCHAR(255) NOT NULL, eyes VARCHAR(255) NOT NULL, hair VARCHAR(255) NOT NULL, corpulence VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, color VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_pokemon (type_id INT NOT NULL, pokemon_id INT NOT NULL, INDEX IDX_4AFDFF06C54C8C93 (type_id), INDEX IDX_4AFDFF062FE71C3E (pokemon_id), PRIMARY KEY(type_id, pokemon_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64986383B10 FOREIGN KEY (avatar_id) REFERENCES avatar (id)');
        $this->addSql('ALTER TABLE attack ADD CONSTRAINT FK_47C02D3BC54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE attack_pokemon ADD CONSTRAINT FK_9B62FC14F5315759 FOREIGN KEY (attack_id) REFERENCES attack (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE attack_pokemon ADD CONSTRAINT FK_9B62FC142FE71C3E FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE inventory ADD CONSTRAINT FK_B12D4A3612469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE type_pokemon ADD CONSTRAINT FK_4AFDFF06C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE type_pokemon ADD CONSTRAINT FK_4AFDFF062FE71C3E FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64986383B10');
        $this->addSql('ALTER TABLE attack_pokemon DROP FOREIGN KEY FK_9B62FC142FE71C3E');
        $this->addSql('ALTER TABLE type_pokemon DROP FOREIGN KEY FK_4AFDFF062FE71C3E');
        $this->addSql('ALTER TABLE attack_pokemon DROP FOREIGN KEY FK_9B62FC14F5315759');
        $this->addSql('ALTER TABLE inventory DROP FOREIGN KEY FK_B12D4A3612469DE2');
        $this->addSql('ALTER TABLE attack DROP FOREIGN KEY FK_47C02D3BC54C8C93');
        $this->addSql('ALTER TABLE type_pokemon DROP FOREIGN KEY FK_4AFDFF06C54C8C93');
        $this->addSql('DROP TABLE avatar');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE pokemon');
        $this->addSql('DROP TABLE game_server');
        $this->addSql('DROP TABLE attack');
        $this->addSql('DROP TABLE attack_pokemon');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE inventory');
        $this->addSql('DROP TABLE trainer');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE type_pokemon');
    }
}
