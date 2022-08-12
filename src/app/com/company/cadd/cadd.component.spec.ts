import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaddComponent } from './cadd.component';

describe('CaddComponent', () => {
  let component: CaddComponent;
  let fixture: ComponentFixture<CaddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
