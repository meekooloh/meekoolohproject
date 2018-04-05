import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import metadataSchema from "../model/metadata-model";

metadataSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Metadata.find(_query)
            .exec((err, metadatas) => {
              err ? reject(err)
                  : resolve(metadatas);
            });
    });
});

metadataSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Metadata is not a valid object."));
        }

        //Metadata.findOne({"_id": new mongoose.Types.ObjectId(id)})
        Metadata.findById(id)
            .exec((err, metadata) => {
              err ? reject(err)
                  : resolve(metadata);
            });
    });
});

metadataSchema.static("createMetadata", (metadata:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(metadata)) {
        return reject(new TypeError("Metadata is not a valid object."));
      }

      var _metadata = new Metadata(metadata);

      _metadata.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

metadataSchema.static("updateMetadata", (id: string, metadata:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(metadata)) {
        return reject(new TypeError("Metadata is not a valid object."));
      }

      Metadata.findByIdAndUpdate(id, metadata)
        .exec((err, saved) => {
            err ? reject(err): resolve(saved);
        });
    });
});

metadataSchema.static("deleteMetadata", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Metadata.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Metadata = mongoose.model("Metadata", metadataSchema);

export default Metadata;
