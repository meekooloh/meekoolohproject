import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import articleSchema from "../model/article-model";

articleSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Article.find(_query)
            .exec((err, articles) => {
              err ? reject(err)
                  : resolve(articles);
            });
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
