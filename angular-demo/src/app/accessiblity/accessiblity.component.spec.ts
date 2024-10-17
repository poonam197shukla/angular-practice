import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessiblityComponent } from './accessiblity.component';

describe('AccessiblityComponent', () => {
  let component: AccessiblityComponent;
  let fixture: ComponentFixture<AccessiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessiblityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
