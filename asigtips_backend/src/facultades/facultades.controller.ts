import { Controller, Get } from '@nestjs/common';
import { FacultadesService } from './facultades.service';

@Controller('facultades')
export class FacultadesController {

    constructor(private facultadesService: FacultadesService) {}

    @Get()
    getFacultades() {
        return this.facultadesService.getFacultades();
    }
}
