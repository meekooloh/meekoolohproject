import * as express from "express";
import CommentDAO from "../dao/comment-dao";

export class CommentController {
  static getAll(req: express.Request, res: express.Response): void {
      CommentDAO
        ["getAll"]()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      CommentDAO
        ["getById"](req.params.id)
        .then(comment => res.status(200).json(comment))
        .catch(error => res.status(400).json(error));
  }

  static createComment(req: express.Request, res: express.Response):void {
      let _comment = req.body;

      CommentDAO
        ["createComment"](_comment)
        .then(comment => res.status(201).json(comment))
        .catch(error => res.status(400).json(error));
  }

  static deleteComment(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    CommentDAO
      ["deleteComment"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
