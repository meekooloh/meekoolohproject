import mongoose from "mongoose";
import {expect} from "chai";

import CarouselDAO from "./carousel-dao";
import { setupMongoose, createCarousels } from "../../../config/db.conf.test";


describe("carousel.dao", () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach((done) => {
    CarouselDAO.remove({}, () => done());
  })

  describe("getAll", () => {
    beforeEach((done) => {
      createCarousels()
        .then(() => done())
        .catch(() => done());
    })

    it("should get all carousels", (done) => {
      let _onSuccess = carousels => {
        expect(carousels).to.be.defined;
        expect(carousels[0]).to.have.property("carouselMessage").and.to.equal("aaaaaaa0");
        expect(carousels[0]).to.have.property("createdAt").and.to.be.defined;

        done();
      }

      let _onError = (err) => {
        expect(true).to.be.false; // should not come here
      }

      CarouselDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("createCarousel", () => {
    it("should throw an error, object passed is not defined", (done) => {
      let _undefinedCarousel = undefined;

      let _onSuccess = () => {
        expect(true).to.be.false; // should not come here;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      CarouselDAO
        .createCarousel(_undefinedCarousel)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should create the carousel correctly", (done) => {
      let _carousel = {carouselMessage: "abc"};

      let _onSuccess = carousel => {
        expect(carousel).to.be.defined;
        expect(carousel.carouselMessage).to.equal("abc");
        expect(carousel.createdAt).to.be.defined;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      CarouselDAO
        .createCarousel(_carousel)
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("deleteCarousel", () => {
    beforeEach((done) => {
      createCarousels()
        .then(() => done())
        .catch(() => done());
    })

    it("should get an error back, id is not defined", (done) => {
      let _id = null;

      let _onSuccess = () => {
        expect(true).to.be.false;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      CarouselDAO
        .deleteCarousel(_id)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should delete the doc successfully", (done) => {
      let _id = "507c7f79bcf86cd7994f6c10";

      let _onSuccess = () => {
        expect(true).to.be.true;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      CarouselDAO
        .deleteCarousel(_id)
        .then(_onSuccess)
        .catch(_onError);
    })
  })
})
