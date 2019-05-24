import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCpanelComponent } from './section-cpanel.component';

describe('SectionCpanelComponent', () => {
  let component: SectionCpanelComponent;
  let fixture: ComponentFixture<SectionCpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
