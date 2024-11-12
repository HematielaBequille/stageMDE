import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-entry-module',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './entry-module.component.html',
  styleUrl: './entry-module.component.scss'
})
export class EntryModuleComponent {

}
