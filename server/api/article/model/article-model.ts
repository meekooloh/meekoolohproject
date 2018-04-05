import * as mongoose from "mongoose";
import { User } from "./../../user/model/user-model";
import UserMongo from "./../../user/model/user-model";
import { Category } from "./../../category/model/category-model";
import CategoryMongo from "./../../category/model/category-model";
import { Metadata } from "./../../metadata/model/metadata-model";
import MetadataMongo from "./../../metadata/model/metadata-model";
import { List } from "lodash";

export interface Article {
    _id?: string,    
    title: string,
    info: string,
    metadata: List<Metadata>,
    user: User,
    category: Category,
    subCategory: List<Category>,
    createdAt: Date
}

let schema = new mongoose.Schema({
    title: {type: String, required: true},
    info: {type: String, required: true},
    metadata: {type: Array(MetadataMongo)},
    user: {type: UserMongo},
    category: {type: CategoryMongo},
    subCategory: {type: Array(CategoryMongo)},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
