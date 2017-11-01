"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MetadataCmp = /** @class */ (function () {
    function MetadataCmp() {
        this.title = "Add Links to metadata, youtube, images...";
        this.newMetadata = new core_1.EventEmitter();
    }
    MetadataCmp.prototype.ngOnInit = function () {
        debugger;
        this.metadataForm = "";
        this.metadataDisplay = this.metadatas ? this.metadatas : [];
    };
    MetadataCmp.prototype.ngOnChanges = function () {
        debugger;
    };
    MetadataCmp.prototype.add = function (metadata) {
        debugger;
        this.metadataDisplay.push(metadata);
        this.metadataForm = "";
        this.newMetadata.emit(this.metadataDisplay);
        console.log(this.metadataDisplay);
    };
    MetadataCmp.prototype.remove = function (metadata) {
        this.metadataDisplay.splice(this.metadataDisplay.indexOf(metadata), 1);
        this.newMetadata.emit(this.metadataDisplay);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MetadataCmp.prototype, "metadatas", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MetadataCmp.prototype, "newMetadata", void 0);
    MetadataCmp = __decorate([
        core_1.Component({
            selector: "metadata-cmp",
            templateUrl: "metadata/templates/metadata.html",
            styleUrls: ["metadata/styles/metadata.css"]
        }),
        __metadata("design:paramtypes", [])
    ], MetadataCmp);
    return MetadataCmp;
}());
exports.MetadataCmp = MetadataCmp;
