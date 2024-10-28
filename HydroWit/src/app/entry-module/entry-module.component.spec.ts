import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryModuleComponent } from './entry-module.component';

describe('EntryModuleComponent', () => {
  let component: EntryModuleComponent;
  let fixture: ComponentFixture<EntryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
