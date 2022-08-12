import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdetailComponent } from './ddetail.component';

describe('DdetailComponent', () => {
  let component: DdetailComponent;
  let fixture: ComponentFixture<DdetailComponent>;

  beforeEach(async(() => {
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
