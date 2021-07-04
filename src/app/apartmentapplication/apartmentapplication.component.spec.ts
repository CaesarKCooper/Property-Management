import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentapplicationComponent } from './apartmentapplication.component';

describe('ApartmentapplicationComponent', () => {
  let component: ApartmentapplicationComponent;
  let fixture: ComponentFixture<ApartmentapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
