import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DdetailComponent } from './ddetail.component';

describe('DdetailComponent', () => {
  let component: DdetailComponent;
  let fixture: ComponentFixture<DdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
