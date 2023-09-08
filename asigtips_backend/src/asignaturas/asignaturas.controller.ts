import { Controller, Get } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';

@Controller('asignaturas')
export class AsignaturasController {

    constructor(private asignaturasService: AsignaturasService) {}

    @Get()
    getAsignaturas() {
        return this.asignaturasService.getAsignaturas();
    }
}
