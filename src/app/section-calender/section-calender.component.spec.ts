import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCalenderComponent } from './section-calender.component';

describe('SectionCalenderComponent', () => {
  let component: SectionCalenderComponent;
  let fixture: ComponentFixture<SectionCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
