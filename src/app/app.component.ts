import { Component } from "@angular/core";
import { MoviesService } from "./services/movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-moviedb";

  constructor(public movieService: MoviesService) {
    this.movieService
      .getPopulares()
      .subscribe((data: any) => console.log("data =>", data));
  }
}
