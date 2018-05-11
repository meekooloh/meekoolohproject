import * as mongoose from "mongoose";
import * as _ from "lodash";
import routeSchema from "../model/route-model";
import categorySchema from "./../../category/model/category-model";
import Category from "../../category/dao/category-dao";
import { async } from "@angular/core/testing";

routeSchema.static("getAll", (filters: any):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};
        Route.find(_query)
            .exec((err, routes) => {
            err ? reject(err)
                : resolve(routes);
        });
    });
});

routeSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Route is not a valid object."));
        }

        //Route.findOne({"_id": new mongoose.Types.ObjectId(id)})
        Route.findById(id)
            .exec((err, route) => {
              err ? reject(err)
                  : resolve(route);
            });
    });
});

routeSchema.static("createRoute", (route:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(route)) {
        return reject(new TypeError("Route is not a valid object."));
      }

      var _route = new Route(route);

      _route.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

routeSchema.static("updateRoute", (id: string, route:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(route)) {
        return reject(new TypeError("Route is not a valid object."));
      }

      Route.findByIdAndUpdate(id, route)
        .exec((err, saved) => {
            err ? reject(err): resolve(saved);
        });
    });
});

routeSchema.static("deleteRoute", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Route.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Route = mongoose.model("Route", routeSchema);

export default Route;
