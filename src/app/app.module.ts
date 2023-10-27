import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [AppComponent],
  // all the modules you have, you need to import them here
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
