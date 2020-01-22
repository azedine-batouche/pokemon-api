import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonApiComponent } from './detail-pokemon-api.component';

describe('DetailPokemonComponent', () => {
  let component: DetailPokemonApiComponent;
  let fixture: ComponentFixture<DetailPokemonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPokemonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
