import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontainerRefElementRefTemplateRefComponent } from './viewcontainer-ref-element-ref-template-ref.component';

describe('ViewcontainerRefElementRefTemplateRefComponent', () => {
  let component: ViewcontainerRefElementRefTemplateRefComponent;
  let fixture: ComponentFixture<ViewcontainerRefElementRefTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcontainerRefElementRefTemplateRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcontainerRefElementRefTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
