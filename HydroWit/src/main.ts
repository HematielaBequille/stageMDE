import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideHttpClient(), importProvidersFrom(BrowserAnimationsModule), provideRouter(routes)]
})
  .catch((err) => console.error(err));
