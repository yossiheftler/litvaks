import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChazoneshnikComponent } from './chazoneshnik.component';

describe('ChazoneshnikComponent', () => {
  let component: ChazoneshnikComponent;
  let fixture: ComponentFixture<ChazoneshnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChazoneshnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChazoneshnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
