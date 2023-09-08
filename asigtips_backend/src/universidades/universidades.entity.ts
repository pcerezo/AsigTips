import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Universidad {
    @PrimaryGeneratedColumn()
    uniCodigo: number;

    @Column()
    uniNombre: string;

    @Column()
    uniAbreviatura: string;

    @Column()
    uniBannerUrl: string;

    constructor(uniNombre: string, uniAbreviatura: string, uniBannerUrl: string) {
        this.uniNombre = uniNombre;
        this.uniAbreviatura = uniAbreviatura;
        this.uniBannerUrl = uniBannerUrl;
    }
}