import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinCombineLatestPromiseAllComponent } from './fork-join-combine-latest-promise-all.component';

describe('ForkJoinCombineLatestPromiseAllComponent', () => {
  let component: ForkJoinCombineLatestPromiseAllComponent;
  let fixture: ComponentFixture<ForkJoinCombineLatestPromiseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkJoinCombineLatestPromiseAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkJoinCombineLatestPromiseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
