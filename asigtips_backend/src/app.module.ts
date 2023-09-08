import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { UniversidadesController } from './universidades/universidades.controller';
import { UniversidadesService } from './universidades/universidades.service';
import { FacultadesController } from './facultades/facultades.controller';
import { FacultadesService } from './facultades/facultades.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Universidad } from './universidades/universidades.entity';
import { UniversidadesModule } from './universidades/universidades.module';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AsignaturasModule, 
    UniversidadesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'asig_tips',
      password: 'QueAppMasGuapa22_',
      database: 'opinionesUGR',
      entities: [Universidad],
      synchronize: false, // Poner a false en producción,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Universidad]),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, UniversidadesController, FacultadesController],
  providers: [AppService, UniversidadesService, FacultadesService, Repository],
})
export class AppModule {}
