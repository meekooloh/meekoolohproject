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
var article_service_1 = require("../services/article-service");
var ArticleCmp = /** @class */ (function () {
    function ArticleCmp(_articleService) {
        this._articleService = _articleService;
        this.title = "Add articles";
        this.articles = [];
        this.cleanForm();
    }
    ArticleCmp.prototype.ngOnInit = function () {
        this._getAll();
    };
    ArticleCmp.prototype._getAll = function () {
        var _this = this;
        this._articleService
            .getAll()
            .subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    ArticleCmp.prototype.add = function (article) {
        var _this = this;
        this._articleService
            .add(article)
            .subscribe(function (m) {
            _this.articles.push(m);
            _this.cleanForm();
        });
    };
    ArticleCmp.prototype.remove = function (id) {
        var _this = this;
        this._articleService
            .remove(id)
            .subscribe(function () {
            _this.articles.forEach(function (t, i) {
                if (t._id === id)
                    return _this.articles.splice(i, 1);
            });
        });
    };
    ArticleCmp.prototype.cleanForm = function () {
        this.articleForm = {
            "title": "",
            "info": "",
            "metadata": [""],
            "user": null,
            "category": null,
            "subCategory": [],
            "createdAt": new Date()
        };
    };
    ArticleCmp = __decorate([
        core_1.Component({
            selector: "article-cmp",
            templateUrl: "article/templates/article.html",
            styleUrls: ["article/styles/article.css"]
        }),
        __metadata("design:paramtypes", [article_service_1.ArticleService])
    ], ArticleCmp);
    return ArticleCmp;
}());
exports.ArticleCmp = ArticleCmp;
