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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CategoryService = /** @class */ (function () {
    function CategoryService(_http) {
        this._http = _http;
    }
    CategoryService_1 = CategoryService;
    CategoryService.prototype.getAll = function () {
        return this._http
            .get(CategoryService_1.ENDPOINT.replace(/:id/, ""))
            .map(function (r) { return r.json(); });
    };
    CategoryService.prototype.getById = function (id) {
        return this._http
            .get(CategoryService_1.ENDPOINT.replace(/:id/, id))
            .map(function (r) { return r.json(); });
    };
    CategoryService.prototype.add = function (category) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http
            .post(CategoryService_1.ENDPOINT.replace(/:id/, ""), category, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    CategoryService.prototype.remove = function (id) {
        return this._http
            .delete(CategoryService_1.ENDPOINT.replace(/:id/, id));
    };
    CategoryService.ENDPOINT = "/api/category/:id";
    CategoryService = CategoryService_1 = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategoryService);
    return CategoryService;
    var CategoryService_1;
}());
exports.CategoryService = CategoryService;
