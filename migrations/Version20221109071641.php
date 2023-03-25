<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221109071641 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE flow (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_flow VARCHAR(100) NOT NULL, init_x INT NOT NULL, init_y INT NOT NULL, init_name VARCHAR(255) NOT NULL, end_x INT NOT NULL, end_y INT NOT NULL, end_name VARCHAR(255) NOT NULL, INDEX IDX_52C0D670A128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE form (id INT AUTO_INCREMENT NOT NULL, width INT NOT NULL, height INT NOT NULL, top INT NOT NULL, left1 INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE gateway (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_gateway VARCHAR(100) NOT NULL, type_gateway VARCHAR(100) NOT NULL, top_gateway INT NOT NULL, left_gateway INT NOT NULL, INDEX IDX_14FEDD7FA128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupe_organisation (id INT AUTO_INCREMENT NOT NULL, org_id INT NOT NULL, name_groupe_org VARCHAR(255) NOT NULL, displayname_groupe_org VARCHAR(255) NOT NULL, description_name_groupe_org LONGTEXT DEFAULT NULL, INDEX IDX_9AB20070F4837C1B (org_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE inter_ev (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_inter_ev VARCHAR(100) NOT NULL, type_inter_ev VARCHAR(100) NOT NULL, top_inter_ev INT NOT NULL, left_inter_ev INT NOT NULL, INDEX IDX_B754AEDAA128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lane (id INT AUTO_INCREMENT NOT NULL, pool_id INT NOT NULL, name_lane VARCHAR(100) NOT NULL, width_lane INT NOT NULL, height_lane INT NOT NULL, INDEX IDX_DF07E54E7B3406DF (pool_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE organisation (id INT AUTO_INCREMENT NOT NULL, name_organisation VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pool (id INT AUTO_INCREMENT NOT NULL, org_id INT NOT NULL, name VARCHAR(255) NOT NULL, width_pool INT NOT NULL, height_pool INT NOT NULL, INDEX IDX_AF91A986F4837C1B (org_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE roles_organisation (id INT AUTO_INCREMENT NOT NULL, org_id INT NOT NULL, names_roles_org VARCHAR(255) NOT NULL, displayname_roles_org VARCHAR(255) DEFAULT NULL, description_roles_org LONGTEXT DEFAULT NULL, INDEX IDX_D4DA717BF4837C1B (org_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE start_ev (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_start VARCHAR(100) NOT NULL, type_start VARCHAR(100) NOT NULL, top_start_ev INT NOT NULL, left_start_ev INT NOT NULL, INDEX IDX_3D31C7DFA128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stop_ev (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_stop_ev VARCHAR(100) NOT NULL, type_stop VARCHAR(100) NOT NULL, top_stop_ev INT NOT NULL, left_stop_ev INT NOT NULL, INDEX IDX_660E3879A128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE task (id INT AUTO_INCREMENT NOT NULL, lane_id INT NOT NULL, name_task VARCHAR(100) NOT NULL, type_task VARCHAR(100) NOT NULL, top_task INT NOT NULL, left_task INT NOT NULL, INDEX IDX_527EDB25A128F72F (lane_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users_organisation (id INT AUTO_INCREMENT NOT NULL, org_id INT NOT NULL, groupe_org_id INT NOT NULL, roles_orga_id INT DEFAULT NULL, username_users_org VARCHAR(255) DEFAULT NULL, password_users_org VARCHAR(255) NOT NULL, title_users_org VARCHAR(255) NOT NULL, firstname_users_org VARCHAR(255) NOT NULL, lastname_users_org VARCHAR(255) NOT NULL, INDEX IDX_B5A514B8F4837C1B (org_id), INDEX IDX_B5A514B89FBD8021 (groupe_org_id), INDEX IDX_B5A514B8ADAE1E5A (roles_orga_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE flow ADD CONSTRAINT FK_52C0D670A128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE gateway ADD CONSTRAINT FK_14FEDD7FA128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE groupe_organisation ADD CONSTRAINT FK_9AB20070F4837C1B FOREIGN KEY (org_id) REFERENCES organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE inter_ev ADD CONSTRAINT FK_B754AEDAA128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lane ADD CONSTRAINT FK_DF07E54E7B3406DF FOREIGN KEY (pool_id) REFERENCES pool (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pool ADD CONSTRAINT FK_AF91A986F4837C1B FOREIGN KEY (org_id) REFERENCES organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE roles_organisation ADD CONSTRAINT FK_D4DA717BF4837C1B FOREIGN KEY (org_id) REFERENCES organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE start_ev ADD CONSTRAINT FK_3D31C7DFA128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stop_ev ADD CONSTRAINT FK_660E3879A128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB25A128F72F FOREIGN KEY (lane_id) REFERENCES lane (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_organisation ADD CONSTRAINT FK_B5A514B8F4837C1B FOREIGN KEY (org_id) REFERENCES organisation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_organisation ADD CONSTRAINT FK_B5A514B89FBD8021 FOREIGN KEY (groupe_org_id) REFERENCES groupe_organisation (id)');
        $this->addSql('ALTER TABLE users_organisation ADD CONSTRAINT FK_B5A514B8ADAE1E5A FOREIGN KEY (roles_orga_id) REFERENCES roles_organisation (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE flow DROP FOREIGN KEY FK_52C0D670A128F72F');
        $this->addSql('ALTER TABLE gateway DROP FOREIGN KEY FK_14FEDD7FA128F72F');
        $this->addSql('ALTER TABLE groupe_organisation DROP FOREIGN KEY FK_9AB20070F4837C1B');
        $this->addSql('ALTER TABLE inter_ev DROP FOREIGN KEY FK_B754AEDAA128F72F');
        $this->addSql('ALTER TABLE lane DROP FOREIGN KEY FK_DF07E54E7B3406DF');
        $this->addSql('ALTER TABLE pool DROP FOREIGN KEY FK_AF91A986F4837C1B');
        $this->addSql('ALTER TABLE roles_organisation DROP FOREIGN KEY FK_D4DA717BF4837C1B');
        $this->addSql('ALTER TABLE start_ev DROP FOREIGN KEY FK_3D31C7DFA128F72F');
        $this->addSql('ALTER TABLE stop_ev DROP FOREIGN KEY FK_660E3879A128F72F');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB25A128F72F');
        $this->addSql('ALTER TABLE users_organisation DROP FOREIGN KEY FK_B5A514B8F4837C1B');
        $this->addSql('ALTER TABLE users_organisation DROP FOREIGN KEY FK_B5A514B89FBD8021');
        $this->addSql('ALTER TABLE users_organisation DROP FOREIGN KEY FK_B5A514B8ADAE1E5A');
        $this->addSql('DROP TABLE flow');
        $this->addSql('DROP TABLE form');
        $this->addSql('DROP TABLE gateway');
        $this->addSql('DROP TABLE groupe_organisation');
        $this->addSql('DROP TABLE inter_ev');
        $this->addSql('DROP TABLE lane');
        $this->addSql('DROP TABLE organisation');
        $this->addSql('DROP TABLE pool');
        $this->addSql('DROP TABLE roles_organisation');
        $this->addSql('DROP TABLE start_ev');
        $this->addSql('DROP TABLE stop_ev');
        $this->addSql('DROP TABLE task');
        $this->addSql('DROP TABLE users_organisation');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
