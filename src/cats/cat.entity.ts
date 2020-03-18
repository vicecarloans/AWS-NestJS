import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    kind: string;

    @Column()
    image: string;

    @Column()
    fact: string;
}