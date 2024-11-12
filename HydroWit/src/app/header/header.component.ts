import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Module } from '../models/module.model';
import { ModulesService } from '../services/modules.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  //encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatMenuTrigger,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger; //

  modules: Module[] = [];

  constructor(private modulesService: ModulesService) {}

  ngOnInit(): void {
    this.modules = this.modulesService.getModules();
    console.log('header initialisé');
  }

  logout() {
    localStorage.removeItem('userToken'); // supprimer le token d'authentification du stockage local
    // this.router.navigate(['/login']);
    console.log('Déconnexion réussie');
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }
}
