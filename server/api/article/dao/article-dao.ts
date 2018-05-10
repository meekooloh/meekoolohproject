import * as mongoose from "mongoose";
import * as _ from "lodash";
import articleSchema from "../model/article-model";
import categorySchema from "./../../category/model/category-model";
import Category from "../../category/dao/category-dao";
import { async } from "@angular/core/testing";

articleSchema.static("getAll", (filters: any):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};
        var keys = Object.keys(filters);
        if (keys.length > 0 ) {
            keys.forEach(async function (key) {
                var value;
                if (key === 'category') {
                    let categories = await Category.find({}).exec();
                    let categoryFilter = categories.find( c => String(c._id) == filters[key]);
                    let categoryFiltersIds= categories.filter(c => (String(c['value'])
                        .slice(0, String(categoryFilter['value']).length) == categoryFilter['value']))
                        .map(e => String(e['_id']));
                    _query['$or']= []
                    categoryFiltersIds.forEach(c => {
                        let newObj = { };
                        newObj[key + '._id'] = c;
                        _query['$or'].push(newObj);
                    });
                } else {
                    value = filters[key];
                    _query[key + '._id'] = value;
                }
                Article.find(_query)
                    .exec((err, articles) => {
                    err ? reject(err)
                      : resolve(articles);
                });
            });
        } else {
            Article.find(_query)
                .exec((err, articles) => {
                err ? reject(err)
                  : resolve(articles);
            });
        }
    });
});

 articleSchema.static("getList", (start: number, end: number, filters: any) => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};
        var keys = Object.keys(filters);
        var categories;
        if (keys.length > 0 ) {
            keys.forEach(async function (key) {
                var value;
                if (key === 'category') {
                    categories = await Category.find({}).exec();
                    let categoryFilter = categories.find( c => String(c._id) == filters[key]);
                    let categoryFiltersIds = categories.filter(c => (String(c['value'])
                        .slice(0, String(categoryFilter['value']).length) == categoryFilter['value']))
                            .map(e => String(e['_id']));
                            _query['$or']= []
                            categoryFiltersIds.forEach(c => {
                                let newObj = { };
                                newObj[key + '._id'] = c;
                                _query['$or'].push(newObj);
                            });
                } else {
                    value = filters[key];
                    _query[key + '._id'] = value;
                }
                Article.find(_query).sort({createdAt: -1}).skip(start).limit(end - start)
                .exec((err, articles) => {
                  err ? reject(err)
                      : resolve(articles);
                });
            });
        } else {
            Article.find(_query).sort({createdAt: -1}).skip(start).limit(end - start)
            .exec((err, articles) => {
              err ? reject(err)
                  : resolve(articles);
            });
        }
    });
});

articleSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Article is not a valid object."));
        }

        //Article.findOne({"_id": new mongoose.Types.ObjectId(id)})
        Article.findById(id)
            .exec((err, article) => {
              err ? reject(err)
                  : resolve(article);
            });
    });
});

articleSchema.static("createArticle", (article:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(article)) {
        return reject(new TypeError("Article is not a valid object."));
      }

      var _article = new Article(article);

      _article.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

articleSchema.static("updateArticle", (id: string, article:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(article)) {
        return reject(new TypeError("Article is not a valid object."));
      }

      Article.findByIdAndUpdate(id, article)
        .exec((err, saved) => {
            err ? reject(err): resolve(saved);
        });
    });
});

articleSchema.static("deleteArticle", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Article.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Article = mongoose.model("Article", articleSchema);

export default Article;
