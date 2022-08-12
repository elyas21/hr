import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EaddComponent } from './eadd.component';

describe('EaddComponent', () => {
  let component: EaddComponent;
  let fixture: ComponentFixture<EaddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
