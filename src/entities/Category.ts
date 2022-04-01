import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

/**
 *  Define Category Entity related to table and columns from database
 * 
*/
@Entity("categories")
class Category {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    desc: string;
    
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

export { Category };