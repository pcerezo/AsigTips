import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Universidad } from './universidades.entity';
import { Repository } from 'typeorm';

export interface UniversidadInterfaz {
    id: number,
    nombre: string,
    abreviatura: string,
    bannerURL: string
}

@Injectable()
export class UniversidadesService {
    constructor(
        @InjectRepository(Universidad)
        private universidadesRepository: Repository<Universidad>,
    ) {}

    findAll(): Promise<Universidad[]> {
        return this.universidadesRepository.find();
    }

    findOne(uniCodigo: number): Promise<Universidad | null> {
        return this.universidadesRepository.findOneBy({ uniCodigo });
    }

    async remove(uniCodigo: number): Promise<void> {
        await this.universidadesRepository.delete(uniCodigo);
    }

    createUniversidad(nombre: string, abreviatura: string, bannerURL: string): Promise<Universidad> {
        console.log("backend: createUniversidad");
        const contenido = new Universidad(nombre, abreviatura, bannerURL);
        console.log("contenido: " + contenido);
        return this.universidadesRepository.save(this.universidadesRepository.create(contenido));
    }

    // private universidades = [
    //     {
    //         id: 1,
    //         nombre: 'Universidad de Granada',
    //         abreviatura: 'UGR',
    //         bannerURL: 'https://canal.ugr.es/wp-content/uploads/2017/07/logo-UGR-color-vertical.jpg'
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Universidad de Almería',
    //         abreviatura: 'UAL',
    //         bannerURL: 'https://novapolis.es/wp-content/uploads/2019/02/banner-ual-2019-logo.jpg'        }
    // ];

    // getUniversidades() {
    //     return this.universidades;
    // }

    // getUniversidad(id: any) {
    //     return this.universidades.find(uni => uni.id == parseInt(id));
    // }
}
