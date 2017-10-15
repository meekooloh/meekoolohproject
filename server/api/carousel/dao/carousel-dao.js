"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var carousel_model_1 = require("../model/carousel-model");
carousel_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Carousel.find(_query)
            .exec(function (err, carousels) {
            err ? reject(err)
                : resolve(carousels);
        });
    });
});
carousel_model_1.default.static("getById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!id) {
            return reject(new TypeError("Carousel is not a valid object."));
        }
        Carousel.findById(id)
            .exec(function (err, carousel) {
            err ? reject(err)
                : resolve(carousel);
        });
    });
});
carousel_model_1.default.static("createCarousel", function (carousel) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(carousel)) {
            return reject(new TypeError("Carousel is not a valid object."));
        }
        var _carousel = new Carousel(carousel);
        _carousel.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
carousel_model_1.default.static("deleteCarousel", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        Carousel.findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Carousel = mongoose.model("Carousel", carousel_model_1.default);
exports.default = Carousel;
//# sourceMappingURL=carousel-dao.js.map