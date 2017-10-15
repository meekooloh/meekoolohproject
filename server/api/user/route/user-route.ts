"use strict";

import * as express from "express";
import {UserController} from "../controller/user-controller";

export class TodoRoutes {
    static init(router: express.Router) {
      router
        .route("/api/users")
        .get(UserController.getAll)
        .post(UserController.createUser);

      router
        .route("/api/users/:id")
        .delete(UserController.deleteUser);
    }
}
