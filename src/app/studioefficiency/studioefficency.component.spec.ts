import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioefficiencyComponent } from './studioefficency.component';

describe('StudioefficencyComponent', () => {
  let component: StudioefficiencyComponent;
  let fixture: ComponentFixture<StudioefficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioefficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioefficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
