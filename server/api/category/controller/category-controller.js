"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_dao_1 = require("../dao/category-dao");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
    }
    CategoryController.getAll = function (req, res) {
        category_dao_1.default["getAll"]()
            .then(function (categorys) { return res.status(200).json(categorys); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CategoryController.getById = function (req, res) {
        category_dao_1.default["getById"](req.params.id)
            .then(function (category) { return res.status(200).json(category); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CategoryController.createCategory = function (req, res) {
        var _category = req.body;
        category_dao_1.default["createCategory"](_category)
            .then(function (category) { return res.status(201).json(category); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CategoryController.deleteCategory = function (req, res) {
        var _id = req.params.id;
        category_dao_1.default["deleteCategory"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return CategoryController;
}());
exports.CategoryController = CategoryController;
//# sourceMappingURL=category-controller.js.map