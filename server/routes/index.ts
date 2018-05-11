import * as express from "express";
import { TodoRoutes } from "../api/todo/route/todo-route";
import { ArticleRoutes } from "../api/article/route/article-route";
import { CarouselRoutes } from "../api/carousel/route/carousel-route";
import { CategoryRoutes } from "../api/category/route/category-route";
import { UserRoutes } from "../api/user/route/user-route";

import {StaticDispatcher} from "../commons/static/index";
import { ComponentRoutes } from "../api/component/route/component-route";
import { PageRoutes } from "../api/page/route/page-route";
import { RouteRoutes } from "../api/route/route/route-route";


export class Routes {
    static init(app: express.Application, router: express.Router) {
        TodoRoutes.init(router);
        RouteRoutes.init(router);
        ComponentRoutes.init(router);
        PageRoutes.init(router);
        ArticleRoutes.init(router);
        CarouselRoutes.init(router);
        CategoryRoutes.init(router);
        UserRoutes.init(router);

    router
        .route("*")
        .get(StaticDispatcher.sendIndex);

    app.use("/", router);
   }
}
