"use strict";

import * as express from "express";
import {CategoryController} from "../controller/category-controller";

export class CategoryRoutes {
    static init(router: express.Router) {
      router
        .route("/api/category")
        .get(CategoryController.getAll)
        .post(CategoryController.createCategory);

      router
        .route("/api/category/:id")
        .delete(CategoryController.deleteCategory);
    }
}
