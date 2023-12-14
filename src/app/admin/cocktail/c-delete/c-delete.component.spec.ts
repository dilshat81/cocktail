import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDeleteComponent } from './c-delete.component';

describe('CDeleteComponent', () => {
  let component: CDeleteComponent;
  let fixture: ComponentFixture<CDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CDeleteComponent]
    });
    fixture = TestBed.createComponent(CDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
