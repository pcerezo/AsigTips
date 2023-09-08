import { Test, TestingModule } from '@nestjs/testing';
import { FacultadesController } from './facultades.controller';

describe('FacultadesController', () => {
  let controller: FacultadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacultadesController],
    }).compile();

    controller = module.get<FacultadesController>(FacultadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
