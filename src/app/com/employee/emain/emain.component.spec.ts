import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmainComponent } from './emain.component';

describe('EmainComponent', () => {
  let component: EmainComponent;
  let fixture: ComponentFixture<EmainComponent>;

  beforeEach(async(() => {
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
