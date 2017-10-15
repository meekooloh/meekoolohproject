import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import categorySchema from "../model/category-model";

categorySchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Category.find(_query)
            .exec((err, categorys) => {
              err ? reject(err)
                  : resolve(categorys);
            });
    });
});

categorySchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Category is not a valid object."));
        }

        Category.findById(id)
            .exec((err, category) => {
              err ? reject(err)
                  : resolve(category);
            });
    });
});

categorySchema.static("createCategory", (category:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(category)) {
        return reject(new TypeError("Category is not a valid object."));
      }

      var _category = new Category(category);

      _category.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

categorySchema.static("deleteCategory", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Category.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Category = mongoose.model("Category", categorySchema);

export default Category;
