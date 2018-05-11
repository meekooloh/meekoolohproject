import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { RouteService } from "../services/route-service";

import { RouteModel } from './../../../../server/api/route/model/route-model'

@Component({
  selector: "route-cmp",
  templateUrl: "route/templates/route.html",
  styleUrls: ["route/styles/route.css", "app.css"]
})
export class RouteCmp implements OnInit, OnChanges {
  @Input() route: RouteModel;
  title: string = "Add route";
  routeForm: RouteModel;
  routeDisplay: RouteModel[];
  @Output() newRoute: EventEmitter<RouteModel>;
  routeError: string;

  constructor(private _routeService: RouteService) {
    this.newRoute = new EventEmitter();
  }

  ngOnInit() {
    this.routeForm = this.route ? this.route : {
      label : "",
      route : null
    };
    this._getAll();
  }

  private _getAll(): void {
    this._routeService
        .getAll()
        .subscribe((ca) => {
          this.routeDisplay = ca;
        });
  }

  add(route: RouteModel): void {
    this._routeService
      .add(route)
          .subscribe((c) => {
            this.routeDisplay.push(c);
            this.cleanForm();
            //this.newMetadata.emit(this.routeForm);
          });    
  }

  ngOnChanges() {
  }

  remove(route: RouteModel) {
    this.routeDisplay.forEach(c => {
      if (c._id == route._id) {
        this._routeService.remove(c._id).subscribe(res => {
          console.log('deleted item');
        }, err => {
          console.log(err);
        })
        // delete c;
      }
    })
    this.routeDisplay.splice(this.routeDisplay.indexOf(route), 1)
    this.newRoute.emit(this.routeForm);
  }

  cleanForm() {
    this.routeForm = {
      label : "",
      route : null
    }
  }
}
