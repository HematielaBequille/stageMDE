import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  getModules() {
    return [
      {
        id: 1,
        title: 'module1',
        description: 'le module 1',
      },
      {
        id: 2,
        title: 'module2',
        description: 'le module 2',
      },
      {
        id: 3,
        title: 'module3',
        description: 'le module 3',
      },
      {
        id: 4,
        title: 'module4',
        description: 'le module 4',
      },
    ];
  }
}
