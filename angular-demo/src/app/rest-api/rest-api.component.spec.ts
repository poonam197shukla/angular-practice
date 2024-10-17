import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTAPIComponent } from './rest-api.component';

describe('RESTAPIComponent', () => {
  let component: RESTAPIComponent;
  let fixture: ComponentFixture<RESTAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RESTAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RESTAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
