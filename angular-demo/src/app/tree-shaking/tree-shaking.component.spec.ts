import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShakingComponent } from './tree-shaking.component';

describe('TreeShakingComponent', () => {
  let component: TreeShakingComponent;
  let fixture: ComponentFixture<TreeShakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeShakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeShakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
