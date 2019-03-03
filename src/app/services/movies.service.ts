import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private apikey: string = "a26fcc7f157d992f403ae4b6144eabf3";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() +
      1}-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() +
      1}-${hasta.getDay()}`;

    " /discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}";

    let url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));
  }

  getPopulares() {
    let url = `${
      this.urlMoviedb
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));
  }

  buscarPelicula(texto: string) {
    let url = `${
      this.urlMoviedb
    }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));
  }
}
