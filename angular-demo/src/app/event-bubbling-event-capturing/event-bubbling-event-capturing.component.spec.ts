import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBubblingEventCapturingComponent } from './event-bubbling-event-capturing.component';

describe('EventBubblingEventCapturingComponent', () => {
  let component: EventBubblingEventCapturingComponent;
  let fixture: ComponentFixture<EventBubblingEventCapturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBubblingEventCapturingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBubblingEventCapturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
