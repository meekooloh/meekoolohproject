"use strict";

import * as express from "express";
import { ComponentController } from "../controller/component-controller";

export class ComponentRoutes {
    static init(router: express.Router) {
      router
        .route("/api/components")
        .get(ComponentController.getAll)
        .post(ComponentController.createComponent);

      router
        .route("/api/components/:init/:end")
        .get(ComponentController.getAllList)
        .put(ComponentController.updateComponent)
        .delete(ComponentController.deleteComponent);
      router
        .route("/api/components/:id")
        .get(ComponentController.getById)
        .put(ComponentController.updateComponent)
        .delete(ComponentController.deleteComponent);

    } 
}
