import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAddComponent } from './c-add.component';

describe('CAddComponent', () => {
  let component: CAddComponent;
  let fixture: ComponentFixture<CAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CAddComponent]
    });
    fixture = TestBed.createComponent(CAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
