import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayilearnedComponent } from './todayilearned.component';

describe('TodayilearnedComponent', () => {
  let component: TodayilearnedComponent;
  let fixture: ComponentFixture<TodayilearnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayilearnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayilearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
