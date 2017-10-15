import mongoose from "mongoose";
import {expect} from "chai";

import CategoryDAO from "./category-dao";
import { setupMongoose, createCategorys } from "../../../config/db.conf.test";


describe("category.dao", () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach((done) => {
    CategoryDAO.remove({}, () => done());
  })

  describe("getAll", () => {
    beforeEach((done) => {
      createCategorys()
        .then(() => done())
        .catch(() => done());
    })

    it("should get all categorys", (done) => {
      let _onSuccess = categorys => {
        expect(categorys).to.be.defined;
        expect(categorys[0]).to.have.property("categoryMessage").and.to.equal("aaaaaaa0");
        expect(categorys[0]).to.have.property("createdAt").and.to.be.defined;

        done();
      }

      let _onError = (err) => {
        expect(true).to.be.false; // should not come here
      }

      CategoryDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("createCategory", () => {
    it("should throw an error, object passed is not defined", (done) => {
      let _undefinedCategory = undefined;

      let _onSuccess = () => {
        expect(true).to.be.false; // should not come here;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      CategoryDAO
        .createCategory(_undefinedCategory)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should create the category correctly", (done) => {
      let _category = {categoryMessage: "abc"};

      let _onSuccess = category => {
        expect(category).to.be.defined;
        expect(category.categoryMessage).to.equal("abc");
        expect(category.createdAt).to.be.defined;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      CategoryDAO
        .createCategory(_category)
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("deleteCategory", () => {
    beforeEach((done) => {
      createCategorys()
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

      CategoryDAO
        .deleteCategory(_id)
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

      CategoryDAO
        .deleteCategory(_id)
        .then(_onSuccess)
        .catch(_onError);
    })
  })
})
