import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { HomeComponent } from './components/home/home.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { EquipoService } from './services/equipos.service';
import { AlumnosService } from './services/alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    HomeComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EquipoService,AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
