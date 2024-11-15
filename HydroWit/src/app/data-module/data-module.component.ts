import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ModulesService } from '../services/modules.service';
import { HydrowitService } from '../services/hydrowit.service';
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
    private hydrowitService: HydrowitService
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

    this.hydrowitService.getAllStations().subscribe(
      (data) => {
        this.stations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des stations', error);
      }
    );

    this.hydrowitService.getAllSensors().subscribe(
      (data) => {
        this.sensors = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des capteurs', error);
      }
    );
  }

  onSubmit(event: any): void {
    console.log('Stations sélectionnées:', event.stations);
    console.log('Capteurs sélectionnées:', event.sensors);

    this.selectedStations = event.stations;
    this.selectedSensors = event.sensors;

    this.isFormSubmitted = true;
    this.filterData();
  }

  filterData() {
    if (this.selectedStations.length > 0) {
      this.stations = this.stations.filter((station) =>
        this.selectedStations.includes(station.emplacement)
      );
    }
    if (this.selectedSensors.length > 0) {
      this.sensors = this.sensors.filter((sensor) =>
        this.selectedSensors.includes(sensor.id_capteur)
      );
    }
    this.displayedColumns = ['emplacement'];
    this.displayedColumns2 = ['id_capteur', 'nom_capteur'];
  }
}
