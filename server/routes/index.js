"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_route_1 = require("../api/todo/route/todo-route");
var article_route_1 = require("../api/article/route/article-route");
var carousel_route_1 = require("../api/carousel/route/carousel-route");
var category_route_1 = require("../api/category/route/category-route");
var user_route_1 = require("../api/user/route/user-route");
var index_1 = require("../commons/static/index");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        article_route_1.ArticleRoutes.init(router);
        carousel_route_1.CarouselRoutes.init(router);
        category_route_1.CategoryRoutes.init(router);
        user_route_1.UserRoutes.init(router);
        router
            .route("*")
            .get(index_1.StaticDispatcher.sendIndex);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;
