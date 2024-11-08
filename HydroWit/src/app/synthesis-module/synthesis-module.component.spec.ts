import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesisModuleComponent } from './synthesis-module.component';

describe('SynthesisModuleComponent', () => {
  let component: SynthesisModuleComponent;
  let fixture: ComponentFixture<SynthesisModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynthesisModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynthesisModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
