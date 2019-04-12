import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskredditComponent } from './askreddit.component';

describe('AskredditComponent', () => {
  let component: AskredditComponent;
  let fixture: ComponentFixture<AskredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
