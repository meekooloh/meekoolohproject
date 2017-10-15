import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import commentSchema from "../model/comment-model";

commentSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Comment.find(_query)
            .exec((err, comments) => {
              err ? reject(err)
                  : resolve(comments);
            });
    });
});

commentSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Comment is not a valid object."));
        }

        Comment.findById(id)
            .exec((err, comment) => {
              err ? reject(err)
                  : resolve(comment);
            });
    });
});

commentSchema.static("createComment", (comment:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(comment)) {
        return reject(new TypeError("Comment is not a valid object."));
      }

      var _comment = new Comment(comment);

      _comment.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

commentSchema.static("deleteComment", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Comment.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Comment = mongoose.model("Comment", commentSchema);

export default Comment;
