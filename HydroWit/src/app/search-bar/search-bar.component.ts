import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {
  FormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  NgForm,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Station } from '../models/station.model';
import { HydrowitService } from '../services/hydrowit.service';

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
  //stationList: string[] = ['station1', 'station2', 'station3'];
  sensorList: string[] = ['capteur1', 'capteur2', 'capteur3'];
  selectedStations: string[] = [];

  constructor(private hydrowitService: HydrowitService) {}

  ngOnInit(): void {
    this.hydrowitService.getAllStations().subscribe(
      (data) => {
        this.stations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des stations', error);
      }
    );
  }

  onSubmit(): void {
    console.log('Stations sélectionnées:', this.selectedStations);
  }
}
