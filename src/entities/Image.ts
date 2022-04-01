import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";
import { User } from "./User";

/**
 *  Define Image Entity related to table and columns from database
 * 
*/
@Entity("images")
class Image {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    title: string;

    @Column("text")
    data: string;

    @Column()
    user_author_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_author_id"})
    user: User

    @Column()
    category_id: string;
        
    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category

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

export { Image };