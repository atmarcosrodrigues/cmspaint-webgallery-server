import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1645379704734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name: "images",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "data",
                        type: "text"
                    },
                    {
                        name: "user_author_id",
                        type: "uuid"
                    },
                    {
                        name: "category_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_images_category",
                        columnNames: ["category_id"],
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL"
                    },
                    {
                        name: "fk_images_author",
                        columnNames: ["user_author_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL"
                    }
                ]
            })
        );
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("images");
    }

}
