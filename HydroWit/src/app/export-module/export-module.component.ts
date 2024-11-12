import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-export-module',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './export-module.component.html',
  styleUrl: './export-module.component.scss'
})
export class ExportModuleComponent {

}
