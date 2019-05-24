import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPreferenceComponent } from './section-preference.component';

describe('SectionPreferenceComponent', () => {
  let component: SectionPreferenceComponent;
  let fixture: ComponentFixture<SectionPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
