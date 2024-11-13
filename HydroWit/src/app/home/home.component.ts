import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModulesService } from '../services/modules.service';
import { Router } from '@angular/router';
import { Module } from '../models/module.model';
import { User } from '../models/user.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { HeaderComponent } from '../header/header.component';
import { HydrowitService } from '../services/hydrowit.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    HeaderComponent
  ],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  modules: Module[] = [];

  constructor(private modulesService: ModulesService, private router: Router, private hydrowitService: HydrowitService) { }

  ngOnInit(): void {
    console.log("test");
    // on récupère les utilisateurs (tests)
    this.hydrowitService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );

    // on récupère la liste des modules
    this.modules = this.modulesService.getModules();

    console.log('landing page initialisée');
  }

  navigateToModule(module: Module): void {
    this.router.navigate([`/modules/${module.path}/${module.id}`]);
  }
}
