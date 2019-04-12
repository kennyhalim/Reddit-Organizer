import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerthoughtsComponent } from './showerthoughts.component';

describe('ShowerthoughtsComponent', () => {
  let component: ShowerthoughtsComponent;
  let fixture: ComponentFixture<ShowerthoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowerthoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowerthoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
