import { Universidad } from "src/universidades/universidades.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Facultad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    abreviatura: string;

    @Column()
    fotoURL: string;

    @ManyToOne(type => Universidad, universidad => universidad.uniCodigo)
    universidad: Universidad;
}