"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_controller_1 = require("../controller/article-controller");
var ArticleRoutes = /** @class */ (function () {
    function ArticleRoutes() {
    }
    ArticleRoutes.init = function (router) {
        router
            .route("/api/articles")
            .get(article_controller_1.ArticleController.getAll)
            .post(article_controller_1.ArticleController.createArticle);
        router
            .route("/api/articles/:id")
            .delete(article_controller_1.ArticleController.deleteArticle);
    };
    return ArticleRoutes;
}());
exports.ArticleRoutes = ArticleRoutes;
