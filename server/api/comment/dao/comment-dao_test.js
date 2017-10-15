import mongoose from "mongoose";
import {expect} from "chai";

import CommentDAO from "./comment-dao";
import { setupMongoose, createComments } from "../../../config/db.conf.test";


describe("comment.dao", () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach((done) => {
    CommentDAO.remove({}, () => done());
  })

  describe("getAll", () => {
    beforeEach((done) => {
      createComments()
        .then(() => done())
        .catch(() => done());
    })

    it("should get all comments", (done) => {
      let _onSuccess = comments => {
        expect(comments).to.be.defined;
        expect(comments[0]).to.have.property("commentMessage").and.to.equal("aaaaaaa0");
        expect(comments[0]).to.have.property("createdAt").and.to.be.defined;

        done();
      }

      let _onError = (err) => {
        expect(true).to.be.false; // should not come here
      }

      CommentDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("createComment", () => {
    it("should throw an error, object passed is not defined", (done) => {
      let _undefinedComment = undefined;

      let _onSuccess = () => {
        expect(true).to.be.false; // should not come here;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      CommentDAO
        .createComment(_undefinedComment)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should create the comment correctly", (done) => {
      let _comment = {commentMessage: "abc"};

      let _onSuccess = comment => {
        expect(comment).to.be.defined;
        expect(comment.commentMessage).to.equal("abc");
        expect(comment.createdAt).to.be.defined;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      CommentDAO
        .createComment(_comment)
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("deleteComment", () => {
    beforeEach((done) => {
      createComments()
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

      CommentDAO
        .deleteComment(_id)
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

      CommentDAO
        .deleteComment(_id)
        .then(_onSuccess)
        .catch(_onError);
    })
  })
})
