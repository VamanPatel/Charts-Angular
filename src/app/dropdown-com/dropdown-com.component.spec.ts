import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComComponent } from './dropdown-com.component';

describe('DropdownComComponent', () => {
  let component: DropdownComComponent;
  let fixture: ComponentFixture<DropdownComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
