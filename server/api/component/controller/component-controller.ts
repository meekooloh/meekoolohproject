import * as express from "express";
import ComponentDAO from "../dao/component-dao";

export class ComponentController {
  static getAll(req: express.Request, res: express.Response): void {
      ComponentDAO
        ["getAll"](req.query)
        .then(components => res.status(200).json(components))
        .catch(error => res.status(400).json(error));
  }

  static getAllList(req: express.Request, res: express.Response): void {
    ComponentDAO
      ["getList"](parseInt(req.params.init), parseInt(req.params.end), req.query)
      .then(components => res.status(200).json(components))
      .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      ComponentDAO
        ["getById"](req.params.id)
        .then(component => res.status(200).json(component))
        .catch(error => res.status(400).json(error));
  }

  static createComponent(req: express.Request, res: express.Response):void {
      let _component = req.body;

      ComponentDAO
        ["createComponent"](_component)
        .then(component => res.status(201).json(component))
        .catch(error => res.status(400).json(error));
  }

  static updateComponent(req: express.Request, res: express.Response):void {
    let _component = req.body;
    let _id = req.params.id;
    
    ComponentDAO
      ["updateComponent"](_id, _component)
      .then(component => res.status(201).json(component))
      .catch(error => res.status(400).json(error));
}

  static deleteComponent(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    ComponentDAO
      ["deleteComponent"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
