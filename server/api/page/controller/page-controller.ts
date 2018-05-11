import * as express from "express";
import PageDAO from "../dao/page-dao";

export class PageController {
  static getAll(req: express.Request, res: express.Response): void {
      PageDAO
        ["getAll"](req.query)
        .then(pages => res.status(200).json(pages))
        .catch(error => res.status(400).json(error));
  }

  static getAllList(req: express.Request, res: express.Response): void {
    PageDAO
      ["getList"](parseInt(req.params.init), parseInt(req.params.end), req.query)
      .then(pages => res.status(200).json(pages))
      .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      PageDAO
        ["getById"](req.params.id)
        .then(page => res.status(200).json(page))
        .catch(error => res.status(400).json(error));
  }

  static createPage(req: express.Request, res: express.Response):void {
      let _page = req.body;

      PageDAO
        ["createPage"](_page)
        .then(page => res.status(201).json(page))
        .catch(error => res.status(400).json(error));
  }

  static updatePage(req: express.Request, res: express.Response):void {
    let _page = req.body;
    let _id = req.params.id;
    
    PageDAO
      ["updatePage"](_id, _page)
      .then(page => res.status(201).json(page))
      .catch(error => res.status(400).json(error));
}

  static deletePage(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    PageDAO
      ["deletePage"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
