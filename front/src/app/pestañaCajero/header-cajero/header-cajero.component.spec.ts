import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCajeroComponent } from './header-cajero.component';

describe('HeaderCajeroComponent', () => {
  let component: HeaderCajeroComponent;
  let fixture: ComponentFixture<HeaderCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
