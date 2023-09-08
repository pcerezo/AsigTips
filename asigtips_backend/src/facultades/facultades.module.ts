import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Facultad } from "./facultades.entity";
import { FacultadesService } from "./facultades.service";
import { FacultadesController } from "./facultades.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Facultad])],
    providers: [FacultadesService],
    controllers: [FacultadesController]
})
export class FacultadesModule {}