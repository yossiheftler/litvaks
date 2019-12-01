import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoneamComponent } from './soneam.component';

describe('SoneamComponent', () => {
  let component: SoneamComponent;
  let fixture: ComponentFixture<SoneamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoneamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoneamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
