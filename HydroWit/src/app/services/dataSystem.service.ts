import { Injectable } from '@angular/core';
import { DataSystem } from '../models/dataSystem.model';

@Injectable({
  providedIn: 'root',
})
export class DataSystemService {
  private dataSystems: DataSystem[] = [
    { id: 'telemesures', name: 'Télémesures' },
    { id: 'mareegraphe', name: 'Maréegraphe' },
    { id: 'meteorologie', name: 'Météorologie' },
  ];

  getDataSystems(): DataSystem[] {
    return this.dataSystems;
  }
}
