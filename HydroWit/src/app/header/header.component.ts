import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatMenuTrigger,
    CommonModule
  ],
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger; //
  
  logout() {
    localStorage.removeItem('userToken'); // supprimer le token d'authentification du stockage local
    // this.router.navigate(['/login']);
    console.log('Déconnexion réussie');
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }
}
