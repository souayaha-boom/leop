import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeopDashComponent } from './leop-dash.component';

describe('LeopDashComponent', () => {
  let component: LeopDashComponent;
  let fixture: ComponentFixture<LeopDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeopDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeopDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
