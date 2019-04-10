import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReddevilsComponent } from './reddevils.component';

describe('ReddevilsComponent', () => {
  let component: ReddevilsComponent;
  let fixture: ComponentFixture<ReddevilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReddevilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReddevilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
