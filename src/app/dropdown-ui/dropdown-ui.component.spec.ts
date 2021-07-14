import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUiComponent } from './dropdown-ui.component';

describe('DropdownUiComponent', () => {
  let component: DropdownUiComponent;
  let fixture: ComponentFixture<DropdownUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
