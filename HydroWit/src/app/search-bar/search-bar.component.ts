import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  onSubmit(form: any) {
    console.log('Formulaire envoyé ', form);
    console.log('Données envoyées: ', form.value);
  }
}
