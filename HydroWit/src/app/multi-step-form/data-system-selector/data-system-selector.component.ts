import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataSystemService } from '../../services/dataSystem.service';
import { DataSystem } from '../../models/dataSystem.model';

@Component({
  selector: 'app-data-system-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-system-selector.component.html',
  styleUrl: './data-system-selector.component.scss',
})
export class DataSystemSelectorComponent {
  dataSystems: DataSystem[] = [];
  selectedDataSystemValue: string = '';

  @Input() formData: any;
  //@Output() dataChange = new EventEmitter<any>();
  @Output() selectedDataSystem = new EventEmitter<string>();
  

  constructor(private dataSystemService: DataSystemService) {}

  ngOnInit() {
    this.dataSystems = this.dataSystemService.getDataSystems();
  }

  onDataChange() {
    //console.log('Système de données sélectionné :', this.selectedDataSystem);
    this.selectedDataSystem.emit(this.selectedDataSystemValue);
  }
}
