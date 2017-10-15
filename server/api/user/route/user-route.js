"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controller/user-controller");
var TodoRoutes = /** @class */ (function () {
    function TodoRoutes() {
    }
    TodoRoutes.init = function (router) {
        router
            .route("/api/users")
            .get(user_controller_1.UserController.getAll)
            .post(user_controller_1.UserController.createUser);
        router
            .route("/api/users/:id")
            .delete(user_controller_1.UserController.deleteUser);
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=user-route.js.map