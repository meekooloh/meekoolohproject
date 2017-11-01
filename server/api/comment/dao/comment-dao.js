"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var comment_model_1 = require("../model/comment-model");
comment_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Comment.find(_query)
            .exec(function (err, comments) {
            err ? reject(err)
                : resolve(comments);
        });
    });
});
comment_model_1.default.static("getById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!id) {
            return reject(new TypeError("Comment is not a valid object."));
        }
        Comment.findById(id)
            .exec(function (err, comment) {
            err ? reject(err)
                : resolve(comment);
        });
    });
});
comment_model_1.default.static("createComment", function (comment) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(comment)) {
            return reject(new TypeError("Comment is not a valid object."));
        }
        var _comment = new Comment(comment);
        _comment.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
comment_model_1.default.static("deleteComment", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        Comment.findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Comment = mongoose.model("Comment", comment_model_1.default);
exports.default = Comment;
