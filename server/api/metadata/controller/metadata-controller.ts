import * as express from "express";
import MetadataDAO from "../dao/metadata-dao";

export class MetadataController {
  static getAll(req: express.Request, res: express.Response): void {
      MetadataDAO
        ["getAll"]()
        .then(metadatas => res.status(200).json(metadatas))
        .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      MetadataDAO
        ["getById"](req.params.id)
        .then(metadata => res.status(200).json(metadata))
        .catch(error => res.status(400).json(error));
  }

  static createMetadata(req: express.Request, res: express.Response):void {
      let _metadata = req.body;

      MetadataDAO
        ["createMetadata"](_metadata)
        .then(metadata => res.status(201).json(metadata))
        .catch(error => res.status(400).json(error));
  }

  static updateMetadata(req: express.Request, res: express.Response):void {
    let _metadata = req.body;
    let _id = req.params.id;
    
    MetadataDAO
      ["updateMetadata"](_id, _metadata)
      .then(metadata => res.status(201).json(metadata))
      .catch(error => res.status(400).json(error));
}

  static deleteMetadata(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    MetadataDAO
      ["deleteMetadata"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
