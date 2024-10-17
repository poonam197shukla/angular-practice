import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwEncapsulationComponent } from './veiw-encapsulation.component';

describe('VeiwEncapsulationComponent', () => {
  let component: VeiwEncapsulationComponent;
  let fixture: ComponentFixture<VeiwEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiwEncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
