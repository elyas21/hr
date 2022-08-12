import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeditComponent } from './cedit.component';

describe('CeditComponent', () => {
  let component: CeditComponent;
  let fixture: ComponentFixture<CeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
