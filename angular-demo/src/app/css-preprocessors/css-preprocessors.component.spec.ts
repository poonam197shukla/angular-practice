import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPreprocessorsComponent } from './css-preprocessors.component';

describe('CssPreprocessorsComponent', () => {
  let component: CssPreprocessorsComponent;
  let fixture: ComponentFixture<CssPreprocessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPreprocessorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPreprocessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
