import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { Sensor } from "../models/sensor.model";
import { Station } from "../models/station.model";

@Injectable({
    providedIn: 'root',
})
export class HydrowitService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/users`);
    }

    getAllStations(): Observable<Station[]> {
        return this.http.get<Station[]>(`${this.apiUrl}/field/all/stations`);
    }

    getAllSensors(): Observable<Sensor[]> {
        return this.http.get<Sensor[]>(`${this.apiUrl}/field/all/sensors`);
    }
}