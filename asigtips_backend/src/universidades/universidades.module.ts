import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Universidad } from "./universidades.entity";
import { UniversidadesService } from "./universidades.service";
import { UniversidadesController } from "./universidades.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Universidad])],
    providers: [UniversidadesService],
    controllers: [UniversidadesController]
})
export class UniversidadesModule {}