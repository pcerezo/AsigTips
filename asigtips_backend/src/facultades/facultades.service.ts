import { Injectable } from '@nestjs/common';

@Injectable()
export class FacultadesService {
    private facultades = [
        {
            id: 1,
            nombre: 'Escuela Superior de Ingeniería Informática y Telecomunicaciones',
            abreviatura: 'ETSIIT',
            fotoURL: 'https://etsiit.ugr.es/sites/centros/etsiit/public/imagenes/landing/2020-12/IMG_20201007_161323.jpg',
            universidad: '1'
        }
    ];

    getFacultades() {
        return this.facultades;
    }

    getFacultad(id: any) {
        return this.facultades.find(facultad => facultad.id == parseInt(id));
    }
}
