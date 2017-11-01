import * as express from "express";
import CategoryDAO from "../dao/category-dao";

export class CategoryController {
  static getAll(req: express.Request, res: express.Response): void {
      CategoryDAO
        ["getAll"]()
        .then(category => res.status(200).json(category))
        .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      CategoryDAO
        ["getById"](req.params.id)
        .then(category => res.status(200).json(category))
        .catch(error => res.status(400).json(error));
  }

  static createCategory(req: express.Request, res: express.Response):void {
      let _category = req.body;
    console.log(_category)
      CategoryDAO
        ["createCategory"](_category)
        .then(category => res.status(201).json(category))
        .catch(error => res.status(400).json(error));
  }

  static deleteCategory(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    CategoryDAO
      ["deleteCategory"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
