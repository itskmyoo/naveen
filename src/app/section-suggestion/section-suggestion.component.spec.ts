import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSuggestionComponent } from './section-suggestion.component';

describe('SectionSuggestionComponent', () => {
  let component: SectionSuggestionComponent;
  let fixture: ComponentFixture<SectionSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
