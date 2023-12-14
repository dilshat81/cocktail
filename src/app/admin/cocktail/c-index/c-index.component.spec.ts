import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIndexComponent } from './c-index.component';

describe('CIndexComponent', () => {
  let component: CIndexComponent;
  let fixture: ComponentFixture<CIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CIndexComponent]
    });
    fixture = TestBed.createComponent(CIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
