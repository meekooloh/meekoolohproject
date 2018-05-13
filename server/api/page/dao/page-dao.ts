import * as mongoose from "mongoose";
import * as _ from "lodash";
import pageSchema from "../model/page-model";
import categorySchema from "./../../category/model/category-model";
import Category from "../../category/dao/category-dao";
import { async } from "@angular/core/testing";

pageSchema.static("getAll", (filters: any):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        var _query = {};
        if (filters.route) {
            _query['route._id'] = filters.route;
        }
        Page.find(_query)
            .exec((err, pages) => {
            err ? reject(err)
                : resolve(pages);
        });
    });
});

pageSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Page is not a valid object."));
        }

        //Page.findOne({"_id": new mongoose.Types.ObjectId(id)})
        Page.findById(id)
            .exec((err, page) => {
              err ? reject(err)
                  : resolve(page);
            });
    });
});

pageSchema.static("createPage", (page:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(page)) {
        return reject(new TypeError("Page is not a valid object."));
      }

      var _page = new Page(page);

      _page.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

pageSchema.static("updatePage", (id: string, page:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(page)) {
        return reject(new TypeError("Page is not a valid object."));
      }

      Page.findByIdAndUpdate(id, page)
        .exec((err, saved) => {
            err ? reject(err): resolve(saved);
        });
    });
});

pageSchema.static("deletePage", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Page.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Page = mongoose.model("Page", pageSchema);

export default Page;
