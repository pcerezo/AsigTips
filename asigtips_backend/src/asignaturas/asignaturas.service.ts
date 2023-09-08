import { Injectable } from '@nestjs/common';

@Injectable()
export class AsignaturasService {

    private asignaturas = [{abreviatura: 'SO'}, {abreviatura: 'MP'}];

    getAsignaturas() {
        return this.asignaturas;
    }
}
