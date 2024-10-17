import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUniversalComponent } from './angular-universal.component';

describe('AngularUniversalComponent', () => {
  let component: AngularUniversalComponent;
  let fixture: ComponentFixture<AngularUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularUniversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
