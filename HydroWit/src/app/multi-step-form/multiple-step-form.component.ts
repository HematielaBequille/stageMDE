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
import { DataSystemService } from '../services/dataSystem.service';
import { SensorSelectorComponent } from './sensor-selector/sensor-selector.component';
import { DataSystemSelectorComponent } from './data-system-selector/data-system-selector.component';
import { StationSelectorComponent } from './station-selector/station-selector.component';

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
    SensorSelectorComponent,
    DataSystemSelectorComponent,
    StationSelectorComponent,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class MultiStepFormComponent implements OnInit {
  formData: {} = {
    step1Data: '',
    step2Data: '',
    step3Data: '',
  };
  currentStep: number = 1;
  selectedDataSystem: string = '';
  selectedStations: string[] = [];

  constructor(
    private hydrowitService: HydrowitService,
    private searchBarService: SearchBarService,
    private dataSystemService: DataSystemService
  ) {}

  onDataSystemSelected(selectedDataSystem: string) {
    this.selectedDataSystem = selectedDataSystem;
  }

  onStationsSelected(stations: string[]) {
    this.selectedStations = stations;
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm(): void {
    console.log('Formulaire envoyé:', this.formData);
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}

// TODO il faudrait diviser le formulaire en étape pour bien segmenter le code
// étape 1 : choisir entre les 3 systèmes de données (télémesures, maréegraphe, météorologie)
// étape 2 : selon le système de données choisi, afficher les stations disponibles
// étape 3 : selon les stations choisies, afficher les capteurs disponibles
