import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HydrowitService } from '../../services/hydrowit.service';
import { Station } from '../../models/station.model';
import { DataSystemSelectorComponent } from '../data-system-selector/data-system-selector.component';

@Component({
  selector: 'app-station-selector',
  standalone: true,
  imports: [FormsModule, DataSystemSelectorComponent],
  templateUrl: './station-selector.component.html',
  styleUrl: './station-selector.component.scss',
})
export class StationSelectorComponent {
  selectedDataSystem: string = '';
  stations: Station[] = [];
  selectedStations: string[] = [];

  @Input() formData: any;
  @Output() dataChange = new EventEmitter<any>();

  constructor(private hydrowitService: HydrowitService) {}

  onDataChange() {
    //this.dataChange.emit(this.formData);
    //console.log(this.selectedDataSystem);
    this.hydrowitService
      .getStationsBySystem(this.selectedDataSystem)
      .subscribe((data: Station[]) => {
        this.stations = data;
      });
      //console.log(this.stations);
  }
}
