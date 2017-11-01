"use strict";
/// <reference path="../../../../typings/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var metadata_cmp_1 = require("../../../../client/dev/metadata/components/metadata-cmp");
describe("metadata_component", function () {
    describe("creation", function () {
        it("should create the component correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(metadata_cmp_1.MetadataCmp);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
        }));
        it("should inicialize the cmp correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(metadata_cmp_1.MetadataCmp);
            var instance = fixture.debugElement.componentInstance;
            spyOn(instance, "_getAll").and.callFake(function () { });
            fixture.detectChanges();
            expect(instance._getAll).toHaveBeenCalled();
        }));
        it("should call add correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(metadata_cmp_1.MetadataCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _metadataMsg = "yo";
            instance.add(_metadataMsg);
        }));
        it("should call remove correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(metadata_cmp_1.MetadataCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _id = "abc123";
            instance.remove(_id);
        }));
    });
});
