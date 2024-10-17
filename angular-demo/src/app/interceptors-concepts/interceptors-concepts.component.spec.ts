import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsConceptsComponent } from './interceptors-concepts.component';

describe('InterceptorsConceptsComponent', () => {
  let component: InterceptorsConceptsComponent;
  let fixture: ComponentFixture<InterceptorsConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorsConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorsConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
