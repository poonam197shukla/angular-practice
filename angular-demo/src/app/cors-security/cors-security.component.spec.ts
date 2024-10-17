import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CORSSecurityComponent } from './cors-security.component';

describe('CORSSecurityComponent', () => {
  let component: CORSSecurityComponent;
  let fixture: ComponentFixture<CORSSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CORSSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CORSSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
