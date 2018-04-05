"use strict";

import * as express from "express";
import {MetadataController} from "../controller/metadata-controller";

export class MetadataRoutes {
    static init(router: express.Router) {
      router
        .route("/api/metadatas")
        .get(MetadataController.getAll)
        .post(MetadataController.createMetadata);

      router
        .route("/api/metadatas/:id")
        .get(MetadataController.getById)    
        .put(MetadataController.updateMetadata)
        .delete(MetadataController.deleteMetadata);
    }
}
