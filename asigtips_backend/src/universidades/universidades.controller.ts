import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UniversidadesService } from './universidades.service';
import { Universidad } from './universidades.entity';

interface UniversidadInterfaz {
    id: number,
    nombre: string,
    abreviatura: string,
    bannerURL: string
}

@Controller('universidades')
export class UniversidadesController {
    
    constructor(private universidadesService: UniversidadesService) {}

    @Get()
    getUniversidades() {
        console.log("Recibida petición GET");
        return this.universidadesService.findAll();
    }

    @Get(':id')
    getUniversidad(@Param('id') id: number) {
        return this.universidadesService.findOne(id);
    }

    @Post()
    createUniversidad(@Body() body) {
        console.log("Recibida petición POST. body: " + body.id);
        
        const creada = this.universidadesService.createUniversidad(body.nombre, body.abreviatura, body.bannerURL);

        if (!creada) {
            console.log("Error al crear nueva universidad");
        }
        else {
            console.log("Universidad creada correctamente");
        }
    }
}
