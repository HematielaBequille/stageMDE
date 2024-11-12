import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-synthesis-module',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './synthesis-module.component.html',
  styleUrl: './synthesis-module.component.scss'
})
export class SynthesisModuleComponent {

}
