import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportModuleComponent } from './export-module.component';

describe('ExportModuleComponent', () => {
  let component: ExportModuleComponent;
  let fixture: ComponentFixture<ExportModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
