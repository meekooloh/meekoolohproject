"use strict";

import * as express from "express";
import {CommentController} from "../controller/comment-controller";

export class CommentRoutes {
    static init(router: express.Router) {
      router
        .route("/api/comments")
        .get(CommentController.getAll)
        .post(CommentController.createComment);

      router
        .route("/api/comments/:id")
        .delete(CommentController.deleteComment);
    }
}
