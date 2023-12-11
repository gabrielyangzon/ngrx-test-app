import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTestChildComponent } from './ngrx-test-child.component';

describe('NgrxTestChildComponent', () => {
  let component: NgrxTestChildComponent;
  let fixture: ComponentFixture<NgrxTestChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxTestChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
