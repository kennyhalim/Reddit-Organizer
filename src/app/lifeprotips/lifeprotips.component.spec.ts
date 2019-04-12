import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeprotipsComponent } from './lifeprotips.component';

describe('LifeprotipsComponent', () => {
  let component: LifeprotipsComponent;
  let fixture: ComponentFixture<LifeprotipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeprotipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeprotipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
