"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_controller_1 = require("../controller/category-controller");
var CategoryRoutes = /** @class */ (function () {
    function CategoryRoutes() {
    }
    CategoryRoutes.init = function (router) {
        router
            .route("/api/category")
            .get(category_controller_1.CategoryController.getAll)
            .post(category_controller_1.CategoryController.createCategory);
        router
            .route("/api/category/:id")
            .delete(category_controller_1.CategoryController.deleteCategory);
    };
    return CategoryRoutes;
}());
exports.CategoryRoutes = CategoryRoutes;
