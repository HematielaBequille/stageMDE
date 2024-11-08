import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Page de connexion d\'HydroWit', component: LoginComponent },
  { path: 'accueil', title: 'Page d\'accueil d\'HydroWit', component: LandingPageComponent },
  { path: 'data', title: '', component: SearchBarComponent },
  //{ path: 'header', title: '', component: HeaderComponent },
  { path: '**', title: 'HydroWit - 404 not found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
