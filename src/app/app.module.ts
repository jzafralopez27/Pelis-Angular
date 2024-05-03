import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliListComponent } from './card-peli/pages/peli-list.component';
import { CardPeliComponent } from './card-peli/card-peli.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardPeliComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
