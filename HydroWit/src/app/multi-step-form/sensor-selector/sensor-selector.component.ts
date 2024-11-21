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
  @Input() formData: any;
  @Output() dataChange = new EventEmitter<any>();

  constructor(private hydrowitService: HydrowitService) { }

  onDataChange() {
    this.dataChange.emit(this.formData);
  }
}
