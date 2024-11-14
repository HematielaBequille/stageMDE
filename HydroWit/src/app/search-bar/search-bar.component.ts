import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, FormControl, ReactiveFormsModule, NgForm } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  onSubmit(form: NgForm) {
    console.log('Formulaire envoyé:', {
      stationsSélectionnées: this.stations.value,
      capteursSélectionnés: this.sensors.value,
    });
  }

  stations = new FormControl('');
  stationList: string[] = ['station1', 'station2', 'station3'];

  sensors = new FormControl('');
  sensorList: string[] = ['capteur1', 'capteur2', 'capteur3'];
}
