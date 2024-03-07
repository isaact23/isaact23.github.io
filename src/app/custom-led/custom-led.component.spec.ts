import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLedComponent } from './custom-led.component';

describe('CustomLedComponent', () => {
  let component: CustomLedComponent;
  let fixture: ComponentFixture<CustomLedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomLedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
