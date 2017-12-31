import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { MainService } from "../services/main-service";

@Component({
  selector: "main-cmp",
  templateUrl: "main/templates/main.html",
  styleUrls: ["main/styles/main.css", "app.css"]
})
export class MainCmp {
  title: string = "Admin panel";

  constructor(private _mainService: MainService,
    private router: Router
  ) {
  }

  enroute(route: string): void {
    this.router.navigate([route]);
  }

}
