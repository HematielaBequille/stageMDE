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
import { Observable } from 'rxjs';
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
  selectedSensors: string[] = [];
  selectedDataSystem: string = '';
  isDataSystemSelected: boolean = false;
  isStationsSelected: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(
    private hydrowitService: HydrowitService,
    private searchBarService: SearchBarService
  ) {}

  fetchStations(dataSystemType: string): void {
    let stationsObservable: Observable<Station[]>;

    switch (dataSystemType) {
      case 'meteorologie':
        stationsObservable = this.hydrowitService.getAllMeteorologieStations();
        break;
      case 'telemesures':
        stationsObservable = this.hydrowitService.getAllTelemesuresStations();
        break;
      case 'mareegraphe':
        stationsObservable = this.hydrowitService.getAllMareegrapheStations();
        break;
      default:
        stationsObservable = this.hydrowitService.getAllStations();
        break;
    }
    stationsObservable.subscribe(
      (stations: Station[]) => {
        console.log(`${dataSystemType} stations récupérées :`, stations);
        this.stations = stations;
      },
      (error) => {
        console.error(
          `Erreur lors de la récupération des stations ${dataSystemType} :`,
          error
        );
      }
    );
  }

  fetchSensors(): void {
    let sensorsObservable: Observable<Sensor[]>;

    sensorsObservable = this.hydrowitService.getAllMeteorologieSensors();

    sensorsObservable.subscribe(
      (sensors: Sensor[]) => {
        console.log(`capteurs récupérées :`, sensors);
        this.sensors = sensors;
      },
      (error) => {
        console.error(
          `Erreur lors de la récupération des capteurs :`,
          error
        );
      }
    );
  }

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
    // on remet à zéro
    this.selectedStations = [];
    this.selectedSensors = [];
    this.isStationsSelected = false;
    this.isFormSubmitted = false;

    if (this.selectedDataSystem === 'Météorologie') {
      this.isDataSystemSelected = true;
      this.fetchStations('meteorologie');
    } else if (this.selectedDataSystem === 'Télémesures') {
      this.isDataSystemSelected = true;
      this.fetchStations('telemesures');
    } else if (this.selectedDataSystem === 'Maréegraphe') {
      this.isDataSystemSelected = true;
      this.fetchStations('mareegraphe');
    }

    this.fetchSensors();

    this.isFormSubmitted = true;
    console.log('Stations sélectionnées :', this.selectedStations);
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

    // on remet à zéro
    this.selectedStations = [];
    this.selectedSensors = [];
    this.isStationsSelected = false;
    this.isFormSubmitted = false;
  }
}

// TODO il faudrait diviser le formulaire en étape pour bien segmenter le code
