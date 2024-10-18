import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  getModules() {
    return [
      {
        id: 1,
        title: 'Module Données',
        description: '',
      },
      {
        id: 2,
        title: 'Module Export',
        description: '',
      },
      {
        id: 3,
        title: 'Module Saisie',
        description: '',
      },
      {
        id: 4,
        title: 'Module Synthèse',
        description: '',
      },
    ];
  }
}
