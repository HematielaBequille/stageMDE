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
  //providers: [SearchBarService],
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
    this.hydrowitService.getAllStations().subscribe((data) => {
      this.searchBarService.setStations(data);
      this.stations = this.searchBarService.getFilteredStations();
    });

    this.hydrowitService.getAllSensors().subscribe((data) => {
      this.searchBarService.setSensors(data);
      this.sensors = this.searchBarService.getFilteredSensors();
    });

    // Abonnez-vous aux changements dans les stations et capteurs filtrés
    this.searchBarService.submit.subscribe(() => {
      this.stations = this.searchBarService.getFilteredStations();
      this.sensors = this.searchBarService.getFilteredSensors();
      this.isFormSubmitted = true;
    });
  }

  /*onSearchFormSubmit(event: any): void {
    console.log('Received data:', event);
    this.selectedStations = event.stations;
    this.selectedSensors = event.sensors;

    this.stations = this.searchBarService.getFilteredStations();
    this.sensors = this.searchBarService.getFilteredSensors();

    console.log('Stations:', this.stations);
    console.log('Sensors:', this.sensors);

    this.isFormSubmitted = true;
  }*/
}
