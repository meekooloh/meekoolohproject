"use strict";

import * as express from "express";
import {CarouselController} from "../controller/carousel-controller";

export class CarouselRoutes {
    static init(router: express.Router) {
      router
        .route("/api/carousels")
        .get(CarouselController.getAll)
        .post(CarouselController.createCarousel);

      router
        .route("/api/carousels/:id")
        .delete(CarouselController.deleteCarousel);
    }
}
