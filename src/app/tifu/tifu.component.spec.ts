import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TifuComponent } from './tifu.component';

describe('TifuComponent', () => {
  let component: TifuComponent;
  let fixture: ComponentFixture<TifuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TifuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TifuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
