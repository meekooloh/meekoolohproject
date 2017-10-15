"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_model_1 = require("./../../user/model/user-model");
var category_model_1 = require("./../../category/model/category-model");
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    info: { type: String, required: true },
    metadata: { type: Array(String) },
    user: { type: user_model_1.default },
    category: { type: category_model_1.default },
    subCategory: { type: Array(category_model_1.default) },
    createdAt: { type: Date, default: Date.now }
});
exports.default = schema;
//# sourceMappingURL=article-model.js.map