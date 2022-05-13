import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTypesAddComponent } from './menu-types-add.component';

describe('MenuTypesAddComponent', () => {
  let component: MenuTypesAddComponent;
  let fixture: ComponentFixture<MenuTypesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTypesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTypesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
