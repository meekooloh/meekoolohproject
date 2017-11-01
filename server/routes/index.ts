import * as express from "express";
import { TodoRoutes } from "../api/todo/route/todo-route";
import { ArticleRoutes } from "../api/article/route/article-route";
import { CarouselRoutes } from "../api/carousel/route/carousel-route";
import { CategoryRoutes } from "../api/category/route/category-route";
import { UserRoutes } from "../api/user/route/user-route";

import {StaticDispatcher} from "../commons/static/index";


export class Routes {
    static init(app: express.Application, router: express.Router) {
        TodoRoutes.init(router);
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
