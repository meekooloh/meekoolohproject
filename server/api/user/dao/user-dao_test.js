import mongoose from "mongoose";
import {expect} from "chai";

import UserDAO from "./user-dao";
import { setupMongoose, createUsers } from "../../../config/db.conf.test";


describe("user.dao", () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach((done) => {
    UserDAO.remove({}, () => done());
  })

  describe("getAll", () => {
    beforeEach((done) => {
      createUsers()
        .then(() => done())
        .catch(() => done());
    })

    it("should get all users", (done) => {
      let _onSuccess = users => {
        expect(users).to.be.defined;
        expect(users[0]).to.have.property("userMessage").and.to.equal("aaaaaaa0");
        expect(users[0]).to.have.property("createdAt").and.to.be.defined;

        done();
      }

      let _onError = (err) => {
        expect(true).to.be.false; // should not come here
      }

      UserDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("createUser", () => {
    it("should throw an error, object passed is not defined", (done) => {
      let _undefinedUser = undefined;

      let _onSuccess = () => {
        expect(true).to.be.false; // should not come here;
      }

      let _onError = error => {
        expect(error).to.be.defined;

        done();
      }

      UserDAO
        .createUser(_undefinedUser)
        .then(_onSuccess)
        .catch(_onError);
    })

    it("should create the user correctly", (done) => {
      let _user = {userMessage: "abc"};

      let _onSuccess = user => {
        expect(user).to.be.defined;
        expect(user.userMessage).to.equal("abc");
        expect(user.createdAt).to.be.defined;

        done();
      }

      let _onError = () => {
        expect(true).to.be.false;
      }

      UserDAO
        .createUser(_user)
        .then(_onSuccess)
        .catch(_onError);
    })
  })

  describe("deleteUser", () => {
    beforeEach((done) => {
      createUsers()
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

      UserDAO
        .deleteUser(_id)
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

      UserDAO
        .deleteUser(_id)
        .then(_onSuccess)
        .catch(_onError);
    })
  })
})
