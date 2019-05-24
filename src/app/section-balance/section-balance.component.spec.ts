import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBalanceComponent } from './section-balance.component';

describe('SectionBalanceComponent', () => {
  let component: SectionBalanceComponent;
  let fixture: ComponentFixture<SectionBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
