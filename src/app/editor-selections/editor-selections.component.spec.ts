import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSelectionsComponent } from './editor-selections.component';

describe('EditorSelectionsComponent', () => {
  let component: EditorSelectionsComponent;
  let fixture: ComponentFixture<EditorSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
