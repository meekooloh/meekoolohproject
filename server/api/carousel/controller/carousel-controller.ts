import * as express from "express";
import CarouselDAO from "../dao/carousel-dao";

export class CarouselController {
  static getAll(req: express.Request, res: express.Response): void {
      CarouselDAO
        ["getAll"]()
        .then(carousels => res.status(200).json(carousels))
        .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response):void {
      CarouselDAO
        ["getById"](req.params.id)
        .then(carousel => res.status(200).json(carousel))
        .catch(error => res.status(400).json(error));
  }

  static createCarousel(req: express.Request, res: express.Response):void {
      let _carousel = req.body;

      CarouselDAO
        ["createCarousel"](_carousel)
        .then(carousel => res.status(201).json(carousel))
        .catch(error => res.status(400).json(error));
  }

  static deleteCarousel(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    CarouselDAO
      ["deleteCarousel"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
