import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitComponent } from './view-visit.component';

describe('ViewVisitComponent', () => {
  let component: ViewVisitComponent;
  let fixture: ComponentFixture<ViewVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
