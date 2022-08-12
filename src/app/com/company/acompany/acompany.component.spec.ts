import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanyComponent } from './acompany.component';

describe('AcompanyComponent', () => {
  let component: AcompanyComponent;
  let fixture: ComponentFixture<AcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
