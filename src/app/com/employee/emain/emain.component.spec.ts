import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmainComponent } from './emain.component';

describe('EmainComponent', () => {
  let component: EmainComponent;
  let fixture: ComponentFixture<EmainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
