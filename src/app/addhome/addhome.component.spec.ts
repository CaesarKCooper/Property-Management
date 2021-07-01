import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhomeComponent } from './addhome.component';

describe('AddhomeComponent', () => {
  let component: AddhomeComponent;
  let fixture: ComponentFixture<AddhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
