import * as express from "express";
import ArticleDAO from "../dao/article-dao";

export class ArticleController {
  static getAll(req: express.Request, res: express.Response): void {
      ArticleDAO
        ["getAll"]()
        .then(articles => res.status(200).json(articles))
        .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      ArticleDAO
        ["getById"](req.params.id)
        .then(article => res.status(200).json(article))
        .catch(error => res.status(400).json(error));
  }

  static createArticle(req: express.Request, res: express.Response):void {
      let _article = req.body;

      ArticleDAO
        ["createArticle"](_article)
        .then(article => res.status(201).json(article))
        .catch(error => res.status(400).json(error));
  }

  static updateArticle(req: express.Request, res: express.Response):void {
    let _article = req.body;
    let _id = req.params.id;
    
    ArticleDAO
      ["updateArticle"](_id, _article)
      .then(article => res.status(201).json(article))
      .catch(error => res.status(400).json(error));
}

  static deleteArticle(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    ArticleDAO
      ["deleteArticle"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
