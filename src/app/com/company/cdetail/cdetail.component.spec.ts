import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdetailComponent } from './cdetail.component';

describe('CdetailComponent', () => {
  let component: CdetailComponent;
  let fixture: ComponentFixture<CdetailComponent>;

  beforeEach(async(() => {
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
