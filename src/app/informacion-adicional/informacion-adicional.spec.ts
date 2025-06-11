import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAdicional } from './informacion-adicional';

describe('InformacionAdicional', () => {
  let component: InformacionAdicional;
  let fixture: ComponentFixture<InformacionAdicional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionAdicional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionAdicional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
