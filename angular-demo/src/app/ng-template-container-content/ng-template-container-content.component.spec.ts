import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateContainerContentComponent } from './ng-template-container-content.component';

describe('NgTemplateContainerContentComponent', () => {
  let component: NgTemplateContainerContentComponent;
  let fixture: ComponentFixture<NgTemplateContainerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateContainerContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateContainerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
