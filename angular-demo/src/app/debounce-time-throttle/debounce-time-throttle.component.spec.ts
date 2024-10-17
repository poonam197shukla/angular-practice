import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeThrottleComponent } from './debounce-time-throttle.component';

describe('DebounceTimeThrottleComponent', () => {
  let component: DebounceTimeThrottleComponent;
  let fixture: ComponentFixture<DebounceTimeThrottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceTimeThrottleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceTimeThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
