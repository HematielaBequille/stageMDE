import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HydrowitService } from './services/hydrowit.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SearchBarComponent,
    LoginComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hydrowit';
  /*users: any[] = [];

  constructor(private hydrowitService: HydrowitService) { }*/

  ngOnInit(): void {
    /*this.hydrowitService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );*/
  }
}
