import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingPageComponent,
    SearchBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hydrowit';
}
