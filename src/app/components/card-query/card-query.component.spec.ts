import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQueryComponent } from './card-query.component';

describe('CardQueryComponent', () => {
  let component: CardQueryComponent;
  let fixture: ComponentFixture<CardQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
