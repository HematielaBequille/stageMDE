import { CommonModule } from '@angular/common';
import {
  Component,
  NgModule,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  NgForm,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Station } from '../models/station.model';
import { Sensor } from '../models/sensor.model';
import { HydrowitService } from '../services/hydrowit.service';
import { SearchBarService } from '../services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  //providers: [SearchBarService],
})
export class SearchBarComponent implements OnInit {
  stations: Station[] = [];
  sensors: Sensor[] = [];
  selectedStations: string[] = [];
  selectedSensors: number[] = [];

  constructor(
    private hydrowitService: HydrowitService,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    this.stations = this.searchBarService.getFilteredStations();
    this.sensors = this.searchBarService.getFilteredSensors();
  }

  onSubmit(): void {
    console.log('Stations sélectionnées :', this.selectedStations);
  console.log('Capteurs sélectionnés :', this.selectedSensors);
    this.searchBarService.updateSelections(
      this.selectedStations,
      this.selectedSensors
    );
  }
}
