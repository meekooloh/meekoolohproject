import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { CategoryService } from "../services/category-service";

import { Category } from './../../../../server/api/category/model/category-model'

@Component({
  selector: "category-cmp",
  templateUrl: "category/templates/category.html",
  styleUrls: ["category/styles/category.css"]
})
export class CategoryCmp implements OnInit, OnChanges {
  @Input() category: Category;
  title: string = "Add category";
  categoryForm: Category;
  categoryDisplay: Category[];
  @Output() newMetadata: EventEmitter<Category>;
  
  constructor(private _categoryService: CategoryService) {
    this.newMetadata = new EventEmitter();
  }

  ngOnInit() {
    debugger
    this.categoryForm = this.category ? this.category : {
      label : "",
      level : "",
      value: ""
    };
    this._getAll();
  }

  private _getAll(): void {
    this._categoryService
        .getAll()
        .subscribe((ca) => {
          this.categoryDisplay = ca;
        });
  }

  add(category: Category): void {
    console.log(category)
    this._categoryService
        .add(category)
        .subscribe((c) => {
          this.categoryDisplay.push(c);
          this.cleanForm();
          this.newMetadata.emit(this.categoryForm);
          
        });
  }

  ngOnChanges() {
    debugger;
  }

  remove(category: Category) {
    this.categoryDisplay.forEach(c => {
      if (c._id == category._id) {
        // delete c;
      }
    })
    this.categoryDisplay.splice(this.categoryDisplay.indexOf(category), 1)
    this.newMetadata.emit(this.categoryForm);
  }

  cleanForm() {
    this.categoryForm = {
      level : "",
      label : "",
      value : ""
    }
  }
}
