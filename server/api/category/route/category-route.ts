"use strict";

import * as express from "express";
import {CategoryController} from "../controller/category-controller";

export class CategoryRoutes {
    static init(router: express.Router) {
      router
        .route("/api/categorys")
        .get(CategoryController.getAll)
        .post(CategoryController.createCategory);

      router
        .route("/api/categorys/:id")
        .delete(CategoryController.deleteCategory);
    }
}
