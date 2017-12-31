import * as mongoose from "mongoose";
import { User } from "./../../user/model/user-model";
import UserMongo from "./../../user/model/user-model";
import { Category } from "./../../category/model/category-model";
import CategoryMongo from "./../../category/model/category-model";
import { List } from "lodash";

export interface Article {
    _id?: string,    
    title: string,
    info: string,
    metadata: List<string>,
    user: User,
    category: Category,
    subCategory: List<Category>,
    createdAt: Date
}

let schema = new mongoose.Schema({
    title: {type: String, required: true},
    info: {type: String, required: true},
    metadata: {type: Array(String)},
    user: {type: UserMongo},
    category: {type: CategoryMongo},
    subCategory: {type: Array(CategoryMongo)},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
