import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModulesService } from '../services/modules.service';
import { Router } from '@angular/router';
import { Module } from '../models/module.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    HeaderComponent
  ],
})
export class HomeComponent implements OnInit {
  modules: Module[] = [];

  constructor(private modulesService: ModulesService, private router: Router) {}

  ngOnInit(): void {
    this.modules = this.modulesService.getModules();
    console.log('landing page initialisée');
  }
}
