import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroollComponent } from './scrooll.component';

describe('ScroollComponent', () => {
  let component: ScroollComponent;
  let fixture: ComponentFixture<ScroollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScroollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScroollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
