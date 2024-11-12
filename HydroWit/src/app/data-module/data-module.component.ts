import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulesService } from '../services/modules.service';
import { Module } from '../models/module.model';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { HydrowitService } from '../services/hydrowit.service';


@Component({
  selector: 'app-data-module',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule
  ],
  templateUrl: './data-module.component.html',
  styleUrl: './data-module.component.scss'
})
export class DataModuleComponent implements OnInit {
  module!: Module;
  stations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private modulesService: ModulesService, private hydrowitService: HydrowitService
  ) { }

  ngOnInit(): void {
    // on récupère l'id du module dans les paramètres de la route
    const moduleId = this.route.snapshot.paramMap.get('id');

    if (moduleId) {
      const selectedModule = this.modulesService.getModulesById(moduleId);
      if (selectedModule) {
        this.module = selectedModule;
      } else {
        console.error("Module non trouvé");
      }
    }

    this.hydrowitService.getAllStations().subscribe(
      (data) => {
        this.stations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des stations', error);
      }
    );
  }
}
