import { TestBed, inject } from '@angular/core/testing';
import { DetallesService } from './detalles.service';

describe('DetallesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallesService]
    });
  });

  it('should ...', inject([DetallesService], (service: DetallesService) => {
    expect(service).toBeTruthy();
  }));
});
