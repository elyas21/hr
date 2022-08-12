import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhomeComponent } from './ehome.component';

describe('EhomeComponent', () => {
  let component: EhomeComponent;
  let fixture: ComponentFixture<EhomeComponent>;

  beforeEach(async(() => {
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
