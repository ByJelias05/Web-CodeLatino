import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelExperiencia } from './nivel-experiencia';

describe('NivelExperiencia', () => {
  let component: NivelExperiencia;
  let fixture: ComponentFixture<NivelExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelExperiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelExperiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
