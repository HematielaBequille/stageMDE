import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulesService } from '../services/modules.service';
import { Module } from '../models/module.model';
import { Station } from '../models/station.model';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { HydrowitService } from '../services/hydrowit.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-data-module',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule, MatTableModule
  ],
  templateUrl: './data-module.component.html',
  styleUrl: './data-module.component.scss'
})
export class DataModuleComponent implements OnInit {
  module!: Module;
  stations: Station[] = [];
  displayedColumns: string[] = ['id_atm', 'emplacement', 'secteur', 'activite', 'ref_alti', 'cote_cmh', 'type_atm', 'liste_atm'];

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
