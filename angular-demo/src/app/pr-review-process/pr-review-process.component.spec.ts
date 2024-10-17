import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRReviewProcessComponent } from './pr-review-process.component';

describe('PRReviewProcessComponent', () => {
  let component: PRReviewProcessComponent;
  let fixture: ComponentFixture<PRReviewProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRReviewProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRReviewProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
