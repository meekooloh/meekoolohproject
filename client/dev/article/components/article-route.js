"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var article_cmp_1 = require("../components/article-cmp");
var articleRoutes = [
    {
        path: "articles",
        component: article_cmp_1.ArticleCmp,
        pathMatch: "full"
    }
];
exports.articleRouting = router_1.RouterModule.forRoot(articleRoutes);
