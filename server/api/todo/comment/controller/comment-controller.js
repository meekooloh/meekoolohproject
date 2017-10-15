"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comment_dao_1 = require("../dao/comment-dao");
var CommentController = /** @class */ (function () {
    function CommentController() {
    }
    CommentController.getAll = function (req, res) {
        comment_dao_1.default["getAll"]()
            .then(function (comments) { return res.status(200).json(comments); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CommentController.getById = function (req, res) {
        comment_dao_1.default["getById"](req.params.id)
            .then(function (comment) { return res.status(200).json(comment); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CommentController.createComment = function (req, res) {
        var _comment = req.body;
        comment_dao_1.default["createComment"](_comment)
            .then(function (comment) { return res.status(201).json(comment); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CommentController.deleteComment = function (req, res) {
        var _id = req.params.id;
        comment_dao_1.default["deleteComment"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return CommentController;
}());
exports.CommentController = CommentController;
//# sourceMappingURL=comment-controller.js.map