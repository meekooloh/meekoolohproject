/// <reference path="../../../../typings/index.d.ts" />

import {
  TestBed,
  async
} from "@angular/core/testing";

import {
  Observable
} from "rxjs/Observable";

import {CategoryCmp} from "../../../../client/dev/category/components/category-cmp";

describe("category_component", () => {
  describe("creation", () => {
    it("should create the component correctly", async(() => {
      let fixture = TestBed.createComponent(CategoryCmp);	  
	  fixture.detectChanges();

	  let compiled = fixture.debugElement.nativeElement;

	  expect(compiled).toBeDefined();
    }));

    it("should inicialize the cmp correctly", async(() => {
      let fixture = TestBed.createComponent(CategoryCmp);      
	  let instance = fixture.debugElement.componentInstance;
	  
	  spyOn(instance, "_getAll").and.callFake(() => {});
	  fixture.detectChanges();
	  expect(instance._getAll).toHaveBeenCalled();
    }));

    it("should call add correctly", async(() => {
      let fixture = TestBed.createComponent(CategoryCmp);
	  fixture.detectChanges();

	  let instance = fixture.debugElement.componentInstance;

	  let _categoryMsg = "yo";
	  instance.add(_categoryMsg);
    }));

    it("should call remove correctly", async(() => {
      let fixture = TestBed.createComponent(CategoryCmp);
	  fixture.detectChanges();
	  
	  let instance = fixture.debugElement.componentInstance;
	  let _id = "abc123";

	  instance.remove(_id);
    }));
  });
});
