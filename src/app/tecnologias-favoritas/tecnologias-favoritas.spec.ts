import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasFavoritas } from './tecnologias-favoritas';

describe('TecnologiasFavoritas', () => {
  let component: TecnologiasFavoritas;
  let fixture: ComponentFixture<TecnologiasFavoritas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiasFavoritas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasFavoritas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
