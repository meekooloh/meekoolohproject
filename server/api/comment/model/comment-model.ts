import * as mongoose from "mongoose";
import { User } from "./../../user/model/user-model";
import UserMongo from "./../../user/model/user-model";
import { Article } from "./../../article/model/article-model";
import ArticleMongo from "./../../article/model/article-model";

export interface Comment {
    user: User,
    article: Article,
    title: string,
    text: string,
    createdAt: Date
}

let schema = new mongoose.Schema({
    user: {type: UserMongo, required: true},
    article: {type: ArticleMongo, required: true},
    title: {type: String, required: true, trim: false},
    text: {type: String, required: true, trim: false},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
