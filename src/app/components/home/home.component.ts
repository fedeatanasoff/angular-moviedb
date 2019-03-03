import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public peliService: MoviesService) {
    this.peliService
      .getCartelera()
      .subscribe(data => console.log("obteniendo cartelera", data));
  }

  ngOnInit() {}
}
