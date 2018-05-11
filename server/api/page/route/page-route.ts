"use strict";

import * as express from "express";
import { PageController } from "../controller/page-controller";

export class PageRoutes {
    static init(router: express.Router) {
      router
        .route("/api/pages")
        .get(PageController.getAll)
        .post(PageController.createPage);

      router
        .route("/api/pages/:id")
        .get(PageController.getById)
        .put(PageController.updatePage)
        .delete(PageController.deletePage);

    }
}
