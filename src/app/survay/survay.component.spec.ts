import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayComponent } from './survay.component';

describe('SurvayComponent', () => {
  let component: SurvayComponent;
  let fixture: ComponentFixture<SurvayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
