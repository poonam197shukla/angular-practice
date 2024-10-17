import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildContentchildrenComponent } from './contentchild-contentchildren.component';

describe('ContentchildContentchildrenComponent', () => {
  let component: ContentchildContentchildrenComponent;
  let fixture: ComponentFixture<ContentchildContentchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentchildContentchildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentchildContentchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
