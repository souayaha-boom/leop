import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeopComponent } from './leop.component';

describe('LeopComponent', () => {
  let component: LeopComponent;
  let fixture: ComponentFixture<LeopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
