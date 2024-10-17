import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingResolveComponent } from './lazy-loading-resolve.component';

describe('LazyLoadingResolveComponent', () => {
  let component: LazyLoadingResolveComponent;
  let fixture: ComponentFixture<LazyLoadingResolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadingResolveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
