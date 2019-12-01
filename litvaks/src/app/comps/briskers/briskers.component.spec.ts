import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriskersComponent } from './briskers.component';

describe('BriskersComponent', () => {
  let component: BriskersComponent;
  let fixture: ComponentFixture<BriskersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriskersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriskersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
