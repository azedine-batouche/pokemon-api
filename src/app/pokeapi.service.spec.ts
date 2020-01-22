import { TestBed } from '@angular/core/testing';

import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeapiService = TestBed.get(PokeapiService);
    expect(service).toBeTruthy();
  });
});
