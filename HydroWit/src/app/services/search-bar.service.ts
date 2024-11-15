import { Injectable, EventEmitter } from '@angular/core';
import { Station } from '../models/station.model';
import { Sensor } from '../models/sensor.model';

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
  submit: EventEmitter<{ stations: string[]; sensors: number[] }> =
    new EventEmitter();

  constructor() {}

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
    if (this.selectedStations.length === 0) {
      return this.stations;
    }
    return this.stations.filter((station) =>
      this.selectedStations.includes(station.emplacement)
    );
  }

  getFilteredSensors(): Sensor[] {
    if (this.selectedSensors.length === 0) {
      return this.sensors;
    }
    return this.sensors.filter((sensor) =>
      this.selectedSensors.includes(sensor.id_capteur)
    );
  }
}
