"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carousel_dao_1 = require("../dao/carousel-dao");
var CarouselController = /** @class */ (function () {
    function CarouselController() {
    }
    CarouselController.getAll = function (req, res) {
        carousel_dao_1.default["getAll"]()
            .then(function (carousels) { return res.status(200).json(carousels); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CarouselController.getById = function (req, res) {
        carousel_dao_1.default["getById"](req.params.id)
            .then(function (carousel) { return res.status(200).json(carousel); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CarouselController.createCarousel = function (req, res) {
        var _carousel = req.body;
        carousel_dao_1.default["createCarousel"](_carousel)
            .then(function (carousel) { return res.status(201).json(carousel); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    CarouselController.deleteCarousel = function (req, res) {
        var _id = req.params.id;
        carousel_dao_1.default["deleteCarousel"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return CarouselController;
}());
exports.CarouselController = CarouselController;
