import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidPrinciplesComponent } from './solid-principles.component';

describe('SolidPrinciplesComponent', () => {
  let component: SolidPrinciplesComponent;
  let fixture: ComponentFixture<SolidPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidPrinciplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
