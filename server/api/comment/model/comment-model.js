"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_model_1 = require("./../../user/model/user-model");
var article_model_1 = require("./../../article/model/article-model");
var schema = new mongoose.Schema({
    user: { type: user_model_1.default, required: true },
    article: { type: article_model_1.default, required: true },
    title: { type: String, required: true, trim: false },
    text: { type: String, required: true, trim: false },
    createdAt: { type: Date, default: Date.now }
});
exports.default = schema;
