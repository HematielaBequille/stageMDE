import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ModulesService } from '../services/modules.service';
import { HydrowitService } from '../services/hydrowit.service';
import { SearchBarService } from '../services/search-bar.service';
import { Module } from '../models/module.model';
import { Station } from '../models/station.model';
import { Sensor } from '../models/sensor.model';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-data-module',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatTableModule, SearchBarComponent],
  templateUrl: './data-module.component.html',
  styleUrl: './data-module.component.scss',
})
export class DataModuleComponent implements OnInit {
  module!: Module;
  stations: Station[] = [];
  displayedColumns: string[] = [];
  sensors: Sensor[] = [];
  displayedColumns2: string[] = [];
  isFormSubmitted: boolean = false;
  selectedStations: string[] = [];
  selectedSensors: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private modulesService: ModulesService,
    private hydrowitService: HydrowitService,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    // on récupère l'id du module dans les paramètres de la route
    const moduleId = this.route.snapshot.paramMap.get('id');

    if (moduleId) {
      const selectedModule = this.modulesService.getModulesById(moduleId);
      if (selectedModule) {
        this.module = selectedModule;
      } else {
        console.error('Module non trouvé');
      }
    }

    this.stations = this.searchBarService.getFilteredStations();
    this.sensors = this.searchBarService.getFilteredSensors();
    this.displayedColumns = ['id_atm', 'emplacement'];
    this.displayedColumns2 = ['id_capteur', 'nom_capteur'];

    // Abonnement aux changements dans les stations et capteurs filtrés
    this.searchBarService.submit.subscribe(() => {
      console.log('Événement reçu dans DataModuleComponent');
      this.stations = this.searchBarService.getFilteredStations();
      this.sensors = this.searchBarService.getFilteredSensors();
      console.log('Stations filtrées :', this.stations);
      console.log('Capteurs filtrés :', this.sensors);
      this.isFormSubmitted = true;
    });
  }
}
