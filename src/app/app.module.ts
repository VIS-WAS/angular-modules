import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { DashBoardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, DashBoardModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
