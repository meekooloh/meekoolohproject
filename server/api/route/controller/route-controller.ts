import * as express from "express";
import RouteDAO from "../dao/route-dao";

export class RouteController {
  static getAll(req: express.Request, res: express.Response): void {
      RouteDAO
        ["getAll"](req.query)
        .then(routes => res.status(200).json(routes))
        .catch(error => res.status(400).json(error));
  }

  static getAllList(req: express.Request, res: express.Response): void {
    RouteDAO
      ["getList"](parseInt(req.params.init), parseInt(req.params.end), req.query)
      .then(routes => res.status(200).json(routes))
      .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      RouteDAO
        ["getById"](req.params.id)
        .then(route => res.status(200).json(route))
        .catch(error => res.status(400).json(error));
  }

  static createRoute(req: express.Request, res: express.Response):void {
      let _route = req.body;

      RouteDAO
        ["createRoute"](_route)
        .then(route => res.status(201).json(route))
        .catch(error => res.status(400).json(error));
  }

  static updateRoute(req: express.Request, res: express.Response):void {
    let _route = req.body;
    let _id = req.params.id;
    
    RouteDAO
      ["updateRoute"](_id, _route)
      .then(route => res.status(201).json(route))
      .catch(error => res.status(400).json(error));
}

  static deleteRoute(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    RouteDAO
      ["deleteRoute"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
