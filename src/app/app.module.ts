import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core.module';
import { AuthModule } from './login/auth.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
