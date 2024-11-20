import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSystemSelectorComponent } from './data-system-selector.component';

describe('DataSystemSelectorComponent', () => {
  let component: DataSystemSelectorComponent;
  let fixture: ComponentFixture<DataSystemSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSystemSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSystemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
