import { TestBed, inject } from '@angular/core/testing';
import { MaestrosService } from './maestros.service';

describe('MaestrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaestrosService]
    });
  });

  it('should ...', inject([MaestrosService], (service: MaestrosService) => {
    expect(service).toBeTruthy();
  }));
});
