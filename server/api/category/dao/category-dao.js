"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var category_model_1 = require("../model/category-model");
category_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Category.find(_query)
            .exec(function (err, categorys) {
            err ? reject(err)
                : resolve(categorys);
        });
    });
});
category_model_1.default.static("getById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!id) {
            return reject(new TypeError("Category is not a valid object."));
        }
        Category.findById(id)
            .exec(function (err, category) {
            err ? reject(err)
                : resolve(category);
        });
    });
});
category_model_1.default.static("createCategory", function (category) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(category)) {
            return reject(new TypeError("Category is not a valid object."));
        }
        var _category = new Category(category);
        _category.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
category_model_1.default.static("deleteCategory", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        Category.findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Category = mongoose.model("Category", category_model_1.default);
exports.default = Category;
//# sourceMappingURL=category-dao.js.map