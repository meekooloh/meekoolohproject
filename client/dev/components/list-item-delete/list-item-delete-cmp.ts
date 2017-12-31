import { OnInit, Component, Input } from '@angular/core';
  
@Component({
  selector: "list-item-delete",
  templateUrl: "components/list-item-delete/list-item-delete.html",
  styleUrls: ["components/list-item-delete/list-item-delete.css"]
})

export class ListItemDeleteCmp {
    @Input() item: string;
    
  constructor(
  ) {
  }


}
