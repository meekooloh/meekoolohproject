import * as mongoose from "mongoose";
import User from "./../../user/model/user-model";
import Article from "./../../article/model/article-model";

let schema = new mongoose.Schema({
    user: {type: User, required: true},
    article: {type: Article, required: true},
    title: {type: String, required: true, trim: false},
    text: {type: String, required: true, trim: false},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
