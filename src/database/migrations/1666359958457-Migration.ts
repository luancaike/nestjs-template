import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1666359958457 implements MigrationInterface {
  name = 'Migration1666359958457';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(200) NOT NULL, "name" character varying(200) NOT NULL, "role" character varying(20) NOT NULL, "status" boolean NOT NULL DEFAULT true, "password" character varying NOT NULL, "salt" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
