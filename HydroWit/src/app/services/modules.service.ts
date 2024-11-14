import { Injectable } from '@angular/core';
import { Module } from '../models/module.model';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  private modules: Module[] = [
    {
      id: '1',
      title: 'Module Données',
      description: 'bla',
      responsive: 'non-optimisé pour téléphone & tablette',
      path: 'data'
    },
    {
      id: '2',
      title: 'Module Export',
      description: 'bla',
      responsive: '',
      path: 'export'
    },
    {
      id: '3',
      title: 'Module Saisie',
      description: 'bla',
      responsive: '',
      path: 'entry'
    },
    {
      id: '4',
      title: 'Module Synthèse',
      description: 'bla',
      responsive: '',
      path: 'synthesis'
    },
  ];

  constructor() {}

  getModules(): Module[] {
    return this.modules;
  }

  getModulesById(id: string): Module | undefined {
    return this.modules.find(module => module.id === id);
  }

  
}
