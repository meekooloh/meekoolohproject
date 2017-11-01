"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comment_controller_1 = require("../controller/comment-controller");
var CommentRoutes = /** @class */ (function () {
    function CommentRoutes() {
    }
    CommentRoutes.init = function (router) {
        router
            .route("/api/comments")
            .get(comment_controller_1.CommentController.getAll)
            .post(comment_controller_1.CommentController.createComment);
        router
            .route("/api/comments/:id")
            .delete(comment_controller_1.CommentController.deleteComment);
    };
    return CommentRoutes;
}());
exports.CommentRoutes = CommentRoutes;
