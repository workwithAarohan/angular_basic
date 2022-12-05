import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrsComponent } from './attrs.component';

describe('AttrsComponent', () => {
  let component: AttrsComponent;
  let fixture: ComponentFixture<AttrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
