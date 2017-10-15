import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import carouselSchema from "../model/carousel-model";

carouselSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Carousel.find(_query)
            .exec((err, carousels) => {
              err ? reject(err)
                  : resolve(carousels);
            });
    });
});

carouselSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Carousel is not a valid object."));
        }

        Carousel.findById(id)
            .exec((err, carousel) => {
              err ? reject(err)
                  : resolve(carousel);
            });
    });
});

carouselSchema.static("createCarousel", (carousel:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(carousel)) {
        return reject(new TypeError("Carousel is not a valid object."));
      }

      var _carousel = new Carousel(carousel);

      _carousel.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

carouselSchema.static("deleteCarousel", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Carousel.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Carousel = mongoose.model("Carousel", carouselSchema);

export default Carousel;
