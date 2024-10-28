import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModuleComponent } from './data-module.component';

describe('DataModuleComponent', () => {
  let component: DataModuleComponent;
  let fixture: ComponentFixture<DataModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
