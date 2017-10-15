"use strict";

import * as express from "express";
import {ArticleController} from "../controller/article-controller";

export class ArticleRoutes {
    static init(router: express.Router) {
      router
        .route("/api/articles")
        .get(ArticleController.getAll)
        .post(ArticleController.createArticle);

      router
        .route("/api/articles/:id")
        .delete(ArticleController.deleteArticle);
    }
}
