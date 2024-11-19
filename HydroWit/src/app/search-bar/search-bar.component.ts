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
import { DataSystem } from '../models/dataSystem.model';
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
})
export class SearchBarComponent implements OnInit {
  stations: Station[] = [];
  sensors: Sensor[] = [];
  dataSystems: DataSystem[] = [];
  selectedStations: string[] = [];
  selectedSensors: number[] = [];
  selectedDataSystem: string = '';
  isDataSystemSelected: boolean = false;
  isStationsSelected: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(
    private hydrowitService: HydrowitService,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    this.dataSystems = this.searchBarService.getDataSystems();

    this.hydrowitService.getAllStations().subscribe((data: Station[]) => {
      this.searchBarService.setStations(data);
      this.stations = this.searchBarService.getFilteredStations();
    });

    this.hydrowitService.getAllSensors().subscribe((data: Sensor[]) => {
      this.searchBarService.setSensors(data);
      this.sensors = this.searchBarService.getFilteredSensors();
    });
  }

  onSubmit(): void {
    if (this.selectedDataSystem) {
      this.isDataSystemSelected = true;
      console.log('Système de données sélectionné :', this.selectedDataSystem);
    }
    if (this.selectedStations.length > 0) {
      this.isStationsSelected = true;
      console.log('Stations sélectionnées :', this.selectedStations);
    }

    this.isFormSubmitted = true;
    //console.log('Stations sélectionnées :', this.selectedStations);
    console.log('Capteurs sélectionnés :', this.selectedSensors);
    this.searchBarService.updateSelections(
      this.selectedStations,
      this.selectedSensors
    );
  }

  onDataSystemChange(dataSystemName: string): void {
    this.selectedDataSystem = dataSystemName;
    this.searchBarService.selectedDataSystem = this.selectedDataSystem; // Mettez à jour dans le service
    this.stations = this.searchBarService.getFilteredStations(); // Actualisez les stations affichées
    //console.log('Système de données sélectionné :', this.selectedDataSystem);
  }
}
