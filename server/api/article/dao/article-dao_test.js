import mongoose from "mongoose";
import {expect} from "chai";

import ArticleDAO from "./article-dao";
import { setupMongoose, createArticles } from "../../../config/db.conf.test";


describe("article.dao", () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach((done) => {
    ArticleDAO.remove({}, () => done());
  })

  describe("getAll", () => {
    beforeEach((done) => {
      createArticles()
        .then(() => done())
        .catch(() => done());
    })

    it("should get all articles", (done) => {
      let _onSuccess = articles => {
        expect(articles).to.be.defined;
        expect(articles[0]).to.have.property("articleMessage").and.to.equal("aaaaaaa0");
        expect(articles[0]).to.have.property("createdAt").and.to.be.defined;

        done();
      }

      let _onError = (err) => {
        expect(true).to.be.false; // should not come here
      }

      ArticleDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("createArticle", () => {
    it("should throw an error, object passed is not defined", (done) => {
      let _undefinedArticle = undefined;

      let _onSuccess = () => {
        expect(true).to.be.false; // should not come here;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      ArticleDAO
        .createArticle(_undefinedArticle)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should create the article correctly", (done) => {
      let _article = {articleMessage: "abc"};

      let _onSuccess = article => {
        expect(article).to.be.defined;
        expect(article.articleMessage).to.equal("abc");
        expect(article.createdAt).to.be.defined;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      ArticleDAO
        .createArticle(_article)
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("deleteArticle", () => {
    beforeEach((done) => {
      createArticles()
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

      ArticleDAO
        .deleteArticle(_id)
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

      ArticleDAO
        .deleteArticle(_id)
        .then(_onSuccess)
        .catch(_onError);
    })
  })
})
