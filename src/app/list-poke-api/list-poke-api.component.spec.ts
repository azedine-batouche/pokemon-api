import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokeApiComponent } from './list-poke-api.component';

describe('ListPokeApiComponent', () => {
  let component: ListPokeApiComponent;
  let fixture: ComponentFixture<ListPokeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPokeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
