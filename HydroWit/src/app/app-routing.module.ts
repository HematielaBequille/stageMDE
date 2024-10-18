import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  //{ path: '/data', component: SearchBarComponent }
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
