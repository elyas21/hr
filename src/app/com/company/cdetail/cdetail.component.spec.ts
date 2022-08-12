import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CdetailComponent } from './cdetail.component';

describe('CdetailComponent', () => {
  let component: CdetailComponent;
  let fixture: ComponentFixture<CdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
