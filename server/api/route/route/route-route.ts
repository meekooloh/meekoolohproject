"use strict";

import * as express from "express";
import { RouteController } from "../controller/route-controller";

export class PageRoutes {
    static init(router: express.Router) {
      router
        .route("/api/routes")
        .get(RouteController.getAll)
        .post(RouteController.createRoute);

      router
        .route("/api/routes/:id")
        .get(RouteController.getById)
        .put(RouteController.updateRoute)
        .delete(RouteController.deleteRoute);

    }
}
