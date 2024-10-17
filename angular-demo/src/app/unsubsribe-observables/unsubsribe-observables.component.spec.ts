import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubsribeObservablesComponent } from './unsubsribe-observables.component';

describe('UnsubsribeObservablesComponent', () => {
  let component: UnsubsribeObservablesComponent;
  let fixture: ComponentFixture<UnsubsribeObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsubsribeObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubsribeObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
