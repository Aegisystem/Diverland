import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCajeroComponent } from './contenido-cajero.component';

describe('ContenidoCajeroComponent', () => {
  let component: ContenidoCajeroComponent;
  let fixture: ComponentFixture<ContenidoCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
