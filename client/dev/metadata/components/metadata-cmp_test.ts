/// <reference path="../../../../typings/index.d.ts" />

import {
  TestBed,
  async
} from "@angular/core/testing";

import {
  Observable
} from "rxjs/Observable";

import {MetadataCmp} from "../../../../client/dev/metadata/components/metadata-cmp";

describe("metadata_component", () => {
  describe("creation", () => {
    it("should create the component correctly", async(() => {
      let fixture = TestBed.createComponent(MetadataCmp);	  
	  fixture.detectChanges();

	  let compiled = fixture.debugElement.nativeElement;

	  expect(compiled).toBeDefined();
    }));

    it("should inicialize the cmp correctly", async(() => {
      let fixture = TestBed.createComponent(MetadataCmp);      
	  let instance = fixture.debugElement.componentInstance;
	  
	  spyOn(instance, "_getAll").and.callFake(() => {});
	  fixture.detectChanges();
	  expect(instance._getAll).toHaveBeenCalled();
    }));

    it("should call add correctly", async(() => {
      let fixture = TestBed.createComponent(MetadataCmp);
	  fixture.detectChanges();

	  let instance = fixture.debugElement.componentInstance;

	  let _metadataMsg = "yo";
	  instance.add(_metadataMsg);
    }));

    it("should call remove correctly", async(() => {
      let fixture = TestBed.createComponent(MetadataCmp);
	  fixture.detectChanges();
	  
	  let instance = fixture.debugElement.componentInstance;
	  let _id = "abc123";

	  instance.remove(_id);
    }));
  });
});
