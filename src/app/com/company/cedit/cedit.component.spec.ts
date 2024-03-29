import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CeditComponent } from './cedit.component';

describe('CeditComponent', () => {
  let component: CeditComponent;
  let fixture: ComponentFixture<CeditComponent>;

  beforeEach(waitForAsync(() => {
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
