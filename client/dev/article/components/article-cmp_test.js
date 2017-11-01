"use strict";
/// <reference path="../../../../typings/index.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var Observable_1 = require("rxjs/Observable");
var article_cmp_1 = require("../../../../client/dev/article/components/article-cmp");
var article_service_1 = require("../../../../client/dev/article/services/article-service");
var MockArticleService = /** @class */ (function (_super) {
    __extends(MockArticleService, _super);
    function MockArticleService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockArticleService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([]);
        });
    };
    MockArticleService.prototype.add = function (message) {
        return new Observable_1.Observable(function (o) {
            o.next(message);
        });
    };
    MockArticleService.prototype.remove = function (id) {
        return new Observable_1.Observable(function (o) {
            o.next(id);
        });
    };
    return MockArticleService;
}(article_service_1.ArticleService));
describe("article_component", function () {
    describe("creation", function () {
        it("should create the component correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(article_cmp_1.ArticleCmp);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
        }));
        it("should inicialize the cmp correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(article_cmp_1.ArticleCmp);
            var instance = fixture.debugElement.componentInstance;
            spyOn(instance, "_getAll").and.callFake(function () { });
            fixture.detectChanges();
            expect(instance._getAll).toHaveBeenCalled();
        }));
        it("should call add correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(article_cmp_1.ArticleCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _articleMsg = "yo";
            instance.add(_articleMsg);
        }));
        it("should call remove correctly", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(article_cmp_1.ArticleCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _id = "abc123";
            instance.remove(_id);
        }));
    });
});
