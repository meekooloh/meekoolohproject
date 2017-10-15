import * as mongoose from "mongoose";
import User from "./../../user/model/user-model";
import Category from "./../../category/model/category-model";

let schema = new mongoose.Schema({
    title: {type: String, required: true},
    info: {type: String, required: true},
    metadata: {type: Array(String)},
    user: {type: User},
    category: {type: Category},
    subCategory: {type: Array(Category)},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
