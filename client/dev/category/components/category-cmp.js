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
var category_service_1 = require("../services/category-service");
var CategoryCmp = /** @class */ (function () {
    function CategoryCmp(_categoryService) {
        this._categoryService = _categoryService;
        this.title = "Add category";
        this.newMetadata = new core_1.EventEmitter();
    }
    CategoryCmp.prototype.ngOnInit = function () {
        debugger;
        this.categoryForm = this.category ? this.category : {
            label: "",
            level: "",
            value: ""
        };
        this._getAll();
    };
    CategoryCmp.prototype._getAll = function () {
        var _this = this;
        this._categoryService
            .getAll()
            .subscribe(function (ca) {
            _this.categoryDisplay = ca;
        });
    };
    CategoryCmp.prototype.add = function (category) {
        var _this = this;
        console.log(category);
        this._categoryService
            .add(category)
            .subscribe(function (c) {
            _this.categoryDisplay.push(c);
            _this.cleanForm();
            _this.newMetadata.emit(_this.categoryForm);
        });
    };
    CategoryCmp.prototype.ngOnChanges = function () {
        debugger;
    };
    CategoryCmp.prototype.remove = function (category) {
        this.categoryDisplay.forEach(function (c) {
            if (c._id == category._id) {
                // delete c;
            }
        });
        this.categoryDisplay.splice(this.categoryDisplay.indexOf(category), 1);
        this.newMetadata.emit(this.categoryForm);
    };
    CategoryCmp.prototype.cleanForm = function () {
        this.categoryForm = {
            level: "",
            label: "",
            value: ""
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CategoryCmp.prototype, "category", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CategoryCmp.prototype, "newMetadata", void 0);
    CategoryCmp = __decorate([
        core_1.Component({
            selector: "category-cmp",
            templateUrl: "category/templates/category.html",
            styleUrls: ["category/styles/category.css"]
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryCmp);
    return CategoryCmp;
}());
exports.CategoryCmp = CategoryCmp;
