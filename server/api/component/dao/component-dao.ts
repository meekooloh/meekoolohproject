import * as mongoose from "mongoose";
import * as _ from "lodash";
import componentSchema from "../model/component-model";
import categorySchema from "./../../category/model/category-model";
import Category from "../../category/dao/category-dao";
import { async } from "@angular/core/testing";

componentSchema.static("getAll", (filters: any):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};
        Component.find(_query)
            .exec((err, components) => {
            err ? reject(err)
                : resolve(components);
        });
    });
});

componentSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Component is not a valid object."));
        }

        //Component.findOne({"_id": new mongoose.Types.ObjectId(id)})
        Component.findById(id)
            .exec((err, component) => {
              err ? reject(err)
                  : resolve(component);
            });
    });
});

componentSchema.static("createComponent", (component:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(component)) {
        return reject(new TypeError("Component is not a valid object."));
      }

      var _component = new Component(component);

      _component.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

componentSchema.static("updateComponent", (id: string, component:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(component)) {
        return reject(new TypeError("Component is not a valid object."));
      }

      Component.findByIdAndUpdate(id, component)
        .exec((err, saved) => {
            err ? reject(err): resolve(saved);
        });
    });
});

componentSchema.static("deleteComponent", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Component.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Component = mongoose.model("Component", componentSchema);

export default Component;
