import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

/**
 *  Define User Entity related to table and columns from database
 * 
*/
@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    bio_desc: string;
    
    @Column()
    password: string;
    
    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };