import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesService } from "./services/movies.service";
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
