import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HydrowitService } from '../../services/hydrowit.service';
import { Sensor } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sensor-selector.component.html',
  styleUrl: './sensor-selector.component.scss',
})
export class SensorSelectorComponent {
  sensors: Sensor[] = [];
  selectedSensorsValue: string[] = [];
  //selectedStations: string[] = [];

  @Input() selectedStations: any;
  @Output() selectedSensors = new EventEmitter<any>();

  constructor(private hydrowitService: HydrowitService) {}

  ngOnInit() {}

  onDataChange() {
    this.hydrowitService
      .getSensorsByStations(this.selectedStations)
      .subscribe((data: Sensor[]) => {
        this.sensors = data;
      });
    this.selectedSensors.emit(this.selectedSensorsValue);
  }
}
