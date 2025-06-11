import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuario } from './datos-usuario';

describe('DatosUsuario', () => {
  let component: DatosUsuario;
  let fixture: ComponentFixture<DatosUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
