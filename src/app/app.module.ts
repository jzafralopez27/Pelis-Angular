import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliListComponent } from './card-peli/pages/peli-list.component';
import { CardPeliComponent } from './card-peli/card-peli.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { PeliEditComponent } from './pages/peli-edit/peli-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './common/field-error-display/field-error-display.component';
import { InputWrapperComponent } from './common/input-wrapper/input-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  { path: '', component: PeliListComponent },
  { path: 'edit/:id', component: PeliEditComponent },
  { path: 'edit', component: PeliEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    PeliEditComponent,
    PeliListComponent,
    FieldErrorDisplayComponent,
    InputWrapperComponent
  ],
  imports: [
    BrowserModule,
    CardPeliComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
