import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { ComponentService } from "../services/component-service";

import { ComponentModel } from './../../../../server/api/component/model/component-model'

@Component({
  selector: "component-cmp",
  templateUrl: "component/templates/component.html",
  styleUrls: ["component/styles/component.css", "app.css"]
})
export class ComponentCmp implements OnInit, OnChanges {
  @Input() component: ComponentModel;
  title: string = "Add component";
  componentForm: ComponentModel;
  componentDisplay: ComponentModel[];
  @Output() newComponent: EventEmitter<ComponentModel>;
  componentError: string;

  constructor(private _componentService: ComponentService) {
    this.newComponent = new EventEmitter();
  }

  ngOnInit() {
    this.componentForm = this.component ? this.component : {
      input : "",
      name : null,
      image : null
    };
    this._getAll();
  }

  private _getAll(): void {
    this._componentService
        .getAll()
        .subscribe((ca) => {
          this.componentDisplay = ca;
        });
  }

  add(component: ComponentModel): void {
    this._componentService
      .add(component)
          .subscribe((c) => {
            this.componentDisplay.push(c);
            this.cleanForm();
            //this.newMetadata.emit(this.componentForm);
          });    
  }

  ngOnChanges() {
  }

  remove(component: ComponentModel) {
    this.componentDisplay.forEach(c => {
      if (c._id == component._id) {
        this._componentService.remove(c._id).subscribe(res => {
          console.log('deleted item');
        }, err => {
          console.log(err);
        })
        // delete c;
      }
    })
    this.componentDisplay.splice(this.componentDisplay.indexOf(component), 1)
    this.newComponent.emit(this.componentForm);
  }

  cleanForm() {
    this.componentForm = {
      input : "",
      name : null,
      image : null
    }
  }
}
