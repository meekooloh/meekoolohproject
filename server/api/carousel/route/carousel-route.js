"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carousel_controller_1 = require("../controller/carousel-controller");
var CarouselRoutes = /** @class */ (function () {
    function CarouselRoutes() {
    }
    CarouselRoutes.init = function (router) {
        router
            .route("/api/carousels")
            .get(carousel_controller_1.CarouselController.getAll)
            .post(carousel_controller_1.CarouselController.createCarousel);
        router
            .route("/api/carousels/:id")
            .delete(carousel_controller_1.CarouselController.deleteCarousel);
    };
    return CarouselRoutes;
}());
exports.CarouselRoutes = CarouselRoutes;
