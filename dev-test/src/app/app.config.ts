import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), HttpClientModule, BrowserModule]
};
