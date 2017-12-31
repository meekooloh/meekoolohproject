import { OnInit, Component, EventEmitter, Input, Output, Inject, enableProdMode, NgModule } from '@angular/core';
import { Router, ActivatedRoute,Routes ,RouterLink } from '@angular/router';
import { Validators, FormGroup, FormControl } from "@angular/forms";

type Item = {
    label: string;
    id: string;
    route: string;
  };
  
@Component({
  selector: "list-item",
  templateUrl: "components/list-item/list-item.html",
  styleUrls: ["components/list-item/list-item.css", "app.css"]
})

export class ListItemCmp {
    @Input() items: Array<Item>;
    
  constructor(
    private router: Router
  ) {
  }


}
