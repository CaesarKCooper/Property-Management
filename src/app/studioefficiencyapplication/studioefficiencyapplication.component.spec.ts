import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioefficiencyapplicationComponent } from './studioefficiencyapplication.component';

describe('StudioefficiencyapplicationComponent', () => {
  let component: StudioefficiencyapplicationComponent;
  let fixture: ComponentFixture<StudioefficiencyapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioefficiencyapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioefficiencyapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
