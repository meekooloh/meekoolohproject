"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var article_model_1 = require("../model/article-model");
article_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Article.find(_query)
            .exec(function (err, articles) {
            err ? reject(err)
                : resolve(articles);
        });
    });
});
article_model_1.default.static("getById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!id) {
            return reject(new TypeError("Article is not a valid object."));
        }
        Article.findById(id)
            .exec(function (err, article) {
            err ? reject(err)
                : resolve(article);
        });
    });
});
article_model_1.default.static("createArticle", function (article) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(article)) {
            return reject(new TypeError("Article is not a valid object."));
        }
        var _article = new Article(article);
        _article.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
article_model_1.default.static("deleteArticle", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        Article.findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Article = mongoose.model("Article", article_model_1.default);
exports.default = Article;
