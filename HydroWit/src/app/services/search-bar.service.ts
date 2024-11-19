import { Injectable, EventEmitter } from '@angular/core';
import { Station } from '../models/station.model';
import { Sensor } from '../models/sensor.model';
import { DataSystem } from '../models/dataSystem.model';
import { HydrowitService } from './hydrowit.service';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private stations: Station[] = [];
  private selectedStations: string[] = [];
  displayedColumns: string[] = ['emplacement'];
  private sensors: Sensor[] = [];
  private selectedSensors: number[] = [];
  displayedColumns2: string[] = ['id_capteur', 'nom_capteur'];
  private dataSystems: DataSystem[] = [
    { nom: 'Télémesures' },
    { nom: 'Maréegraphe' },
    { nom: 'Météorologie' },
  ];
  selectedDataSystem: string = '';
  submit: EventEmitter<{ stations: string[]; sensors: number[] }> =
    new EventEmitter();

  constructor(private HydrowitService: HydrowitService) {}

  getDataSystems(): DataSystem[] {
    return this.dataSystems;
  }

  setStations(stations: Station[]): void {
    this.stations = stations;
    console.log('Stations mises à jour :', this.stations);
  }

  setSensors(sensors: Sensor[]): void {
    this.sensors = sensors;
    console.log('Capteurs mis à jour :', this.sensors);
  }

  // Met à jour les stations et capteurs sélectionnés
  updateSelections(
    selectedStations: string[],
    selectedSensors: number[]
  ): void {
    this.selectedStations = selectedStations;
    this.selectedSensors = selectedSensors;

    this.submit.emit({
      stations: this.selectedStations,
      sensors: this.selectedSensors,
    });
  }

  getFilteredStations(): Station[] {
    if (!this.stations || this.stations.length === 0) {
      return [];
    }
    if (this.selectedStations.length === 0) {
      return this.stations;
    }
    if (this.selectedDataSystem) {
      return this.stations.filter((station) =>
        station.systeme_donnes === this.selectedDataSystem);
    }
    return this.stations.filter((station) =>
      this.selectedStations.includes(station.emplacement)
    );
  }

  getFilteredSensors(): Sensor[] {
    if (!this.sensors || this.sensors.length === 0) {
      return [];
    }
    if (this.selectedSensors.length === 0) {
      return this.sensors;
    }
    return this.sensors.filter((sensor) =>
      this.selectedSensors.includes(sensor.id_capteur)
    );
  }
}
