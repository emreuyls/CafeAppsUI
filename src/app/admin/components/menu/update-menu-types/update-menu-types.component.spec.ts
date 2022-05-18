import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMenuTypesComponent } from './update-menu-types.component';

describe('UpdateMenuTypesComponent', () => {
  let component: UpdateMenuTypesComponent;
  let fixture: ComponentFixture<UpdateMenuTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMenuTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMenuTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
