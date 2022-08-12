import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EhomeComponent } from './ehome.component';

describe('EhomeComponent', () => {
  let component: EhomeComponent;
  let fixture: ComponentFixture<EhomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
