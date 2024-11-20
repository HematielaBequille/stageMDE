import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor.model';
import { MareegrapheSensor, MeteorologieSensor } from '../models/sensor.model';
import { Station } from '../models/station.model';

@Injectable({
  providedIn: 'root',
})
export class HydrowitService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // GET - Récupérer tous les utilisateurs
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // GET - Récupérer toutes les stations
  getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.apiUrl}/field/all/stations`);
  }

  // GET - Récupérer tout les capteurs
  getAllSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiUrl}/field/all/sensors`);
  }

  // GET - Récupérer toutes les stations telemesures
  getAllTelemesuresStations(): Observable<Station[]> {
    return this.http.get<Station[]>(
      `${this.apiUrl}/field/telemesures/stations`
    );
  }

  // GET - Récupérer toutes les stations meteorologies
  getAllMeteorologieStations(): Observable<Station[]> {
    return this.http.get<Station[]>(
      `${this.apiUrl}/field/meteorologie/stations`
    );
  }

  // GET - Récupérer toutes les stations mareegraphes
  getAllMareegrapheStations(): Observable<Station[]> {
    return this.http.get<Station[]>(
      `${this.apiUrl}/field/mareegraphe/stations`
    );
  }

  // GET - Récupérer tout les capteurs des stations meteorologies
  getAllMeteorologieSensors(): Observable<MeteorologieSensor[]> {
    return this.http.get<MeteorologieSensor[]>(
      `${this.apiUrl}/field/meteorologie/sensors`
    );
  }
}
