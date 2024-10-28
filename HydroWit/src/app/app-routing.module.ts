import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DataModuleComponent } from './data-module/data-module.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { ExportModuleComponent } from './export-module/export-module.component';
import { EntryModuleComponent } from './entry-module/entry-module.component';
import { SynthesisModuleComponent } from './synthesis-module/synthesis-module.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, // pour rediriger directement sur la page de login
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'back-office', component: BackOfficeComponent },
  { path: 'data-module', component: DataModuleComponent },
  { path: 'export-module', component: ExportModuleComponent },
  { path: 'entry-module', component: EntryModuleComponent },
  { path: 'synthesis-module', component: SynthesisModuleComponent },
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