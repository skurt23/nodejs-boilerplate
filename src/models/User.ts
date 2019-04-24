import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public surname: string;

    @Column({
        nullable: false
    })
    public email: string;

    @Column({
        nullable: false
    })
    public role: string;

    @Column({
        nullable: false
    })
    public password: string;

    @CreateDateColumn({
        nullable: true
    })
    public creationDate: Date;
}
