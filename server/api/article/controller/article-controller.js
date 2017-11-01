"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_dao_1 = require("../dao/article-dao");
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    ArticleController.getAll = function (req, res) {
        article_dao_1.default["getAll"]()
            .then(function (articles) { return res.status(200).json(articles); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ArticleController.getById = function (req, res) {
        article_dao_1.default["getById"](req.params.id)
            .then(function (article) { return res.status(200).json(article); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ArticleController.createArticle = function (req, res) {
        var _article = req.body;
        article_dao_1.default["createArticle"](_article)
            .then(function (article) { return res.status(201).json(article); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ArticleController.deleteArticle = function (req, res) {
        var _id = req.params.id;
        article_dao_1.default["deleteArticle"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return ArticleController;
}());
exports.ArticleController = ArticleController;
