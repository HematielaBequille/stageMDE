import { NgModule, LOCALE_ID, /*CUSTOM_ELEMENTS_SCHEMA*/ } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MaterialModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
