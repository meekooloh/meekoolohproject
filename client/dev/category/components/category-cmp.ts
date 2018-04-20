import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

import { CategoryService } from "../services/category-service";

import { Category } from './../../../../server/api/category/model/category-model'

@Component({
  selector: "category-cmp",
  templateUrl: "category/templates/category.html",
  styleUrls: ["category/styles/category.css", "app.css"]
})
export class CategoryCmp implements OnInit, OnChanges {
  @Input() category: Category;
  title: string = "Add category";
  categoryForm: Category;
  categoryDisplay: Category[];
  @Output() newMetadata: EventEmitter<Category>;
  categoryError: string;

  constructor(private _categoryService: CategoryService) {
    this.newMetadata = new EventEmitter();
  }

  ngOnInit() {
    this.categoryForm = this.category ? this.category : {
      label : "",
      level : null,
      value: null
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
    if (category.value.toString().length == category.level) {
      if (category.level > 0) {
        let prevCatValue = category.value.toString().slice(0, category.value.toString().length-1);
        let matchValue = this.categoryDisplay.find( c => {
          return c.value == parseInt(prevCatValue);
        })
        if ( prevCatValue == "" || !!matchValue) {
          this._categoryService
          .add(category)
          .subscribe((c) => {
            this.categoryDisplay.push(c);
            this.cleanForm();
            this.newMetadata.emit(this.categoryForm);
          });    
        } else {
          this.categoryError = "Level or value are not valid."
        }
      }
    }
  }

  calculateValue(category: Category) {
    this.categoryForm.level = category.level;
    this.categoryForm.value = Math.max.apply(Math, (this.categoryDisplay.filter((e) => {
        return (Math.floor(category.value/10) === Math.floor(e.value/10));
      })).map((o) => {
        return o.value;
      })) + 1;
  }
  calculateChild(category: Category) {

    this.categoryForm.level = category.level + 1;
    if (this.categoryDisplay.filter((e) => (10 * category.level <= e.level && e.level < 10 * category.level + 10)).length > 0 ) {
      // already children
      this.categoryForm.value = Math.max.apply(Math, (this.categoryDisplay.filter((e) => {
        return (10 * category.value <= e.value && e.value < 10 * category.value + 10);
      })).map((o) => {
        return o.value;
      })) + 1;
    } else {
      this.categoryForm.value = parseInt(String(category.value) + String(0));
    }
  }
  ngOnChanges() {
  }

  remove(category: Category) {
    this.categoryDisplay.forEach(c => {
      if (c._id == category._id) {
        this._categoryService.remove(c._id).subscribe(res => {
          console.log('deleted item');
        }, err => {
          console.log(err);
        })
        // delete c;
      }
    })
    this.categoryDisplay.splice(this.categoryDisplay.indexOf(category), 1)
    this.newMetadata.emit(this.categoryForm);
  }

  cleanForm() {
    this.categoryForm = {
      level : null,
      label : "",
      value : null
    }
  }
}
