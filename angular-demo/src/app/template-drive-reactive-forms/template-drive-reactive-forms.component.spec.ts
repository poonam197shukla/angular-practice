import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveReactiveFormsComponent } from './template-drive-reactive-forms.component';

describe('TemplateDriveReactiveFormsComponent', () => {
  let component: TemplateDriveReactiveFormsComponent;
  let fixture: ComponentFixture<TemplateDriveReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDriveReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDriveReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
