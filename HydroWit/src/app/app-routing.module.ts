import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataModuleComponent } from './data-module/data-module.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { ExportModuleComponent } from './export-module/export-module.component';
import { EntryModuleComponent } from './entry-module/entry-module.component';
import { SynthesisModuleComponent } from './synthesis-module/synthesis-module.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, // pour rediriger directement sur la page de login
  { path: 'login', title: 'Page de connexion d\'HydroWit', component: LoginComponent },
  { path: 'home', title: 'Page d\'accueil d\'HydroWit', component: HomeComponent },
  { path: 'back-office', component: BackOfficeComponent },
  { path: 'modules/data/:id', component: DataModuleComponent },
  { path: 'modules/export/:id', component: ExportModuleComponent },
  { path: 'modules/entry/:id', component: EntryModuleComponent },
  { path: 'modules/synthesis/:id', component: SynthesisModuleComponent },
  { path: '**', redirectTo: 'home' } // pour rediriger les routes inconnues vers la page d'accueil
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


// TODO
//{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }

/*
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated =  //logique d'authentification ;
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
*/