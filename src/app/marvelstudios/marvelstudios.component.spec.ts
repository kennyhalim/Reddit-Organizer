import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelstudiosComponent } from './marvelstudios.component';

describe('MarvelstudiosComponent', () => {
  let component: MarvelstudiosComponent;
  let fixture: ComponentFixture<MarvelstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
