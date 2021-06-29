import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionchartComponent } from './fusionchart.component';

describe('FusionchartComponent', () => {
  let component: FusionchartComponent;
  let fixture: ComponentFixture<FusionchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
