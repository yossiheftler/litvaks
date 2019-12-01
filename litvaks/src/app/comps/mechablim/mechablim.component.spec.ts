import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechablimComponent } from './mechablim.component';

describe('MechablimComponent', () => {
  let component: MechablimComponent;
  let fixture: ComponentFixture<MechablimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechablimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechablimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
