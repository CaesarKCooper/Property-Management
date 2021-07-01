import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudioefficiencyComponent } from './addstudioefficiency.component';

describe('AddstudioefficiencyComponent', () => {
  let component: AddstudioefficiencyComponent;
  let fixture: ComponentFixture<AddstudioefficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudioefficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudioefficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
