import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, provideHttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class HydrowitService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/users`);
    }
}