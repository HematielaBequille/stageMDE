import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';
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
    //FormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchBarForm: FormGroup;

  stationList: string[] = ['station1', 'station2', 'station3'];
  sensorList: string[] = ['capteur1', 'capteur2', 'capteur3'];

  isFormDisabled: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialisation du FormGroup
    this.searchBarForm = this.fb.group({
      choice: new FormControl(false),  // pour la case à cocher
      stations: new FormControl(''),   // stations
      sensors: new FormControl(''),    // capteurs
      autreChamp: new FormControl(''), // autre champ
      niveauEau: new FormControl(false),
      mareegraphe: new FormControl(false),
      telemesures: new FormControl(false)
    });

    // Lors du changement de la case 'choice', on verrouille ou déverrouille le formulaire
    this.searchBarForm.get('choice')?.valueChanges.subscribe(value => {
      this.onSelectedChoice(value);
    });
  }

  onSelectedChoice(value: boolean): void {
    //const isChecked = (event.target as HTMLInputElement).checked;
    this.isFormDisabled = value;
    if (this.isFormDisabled) {
      this.searchBarForm.disable();
    } else {
      this.searchBarForm.enable();
    }
  }

  onSubmit(): void {
    console.log('Formulaire envoyé:', this.searchBarForm.value);
  }
}
