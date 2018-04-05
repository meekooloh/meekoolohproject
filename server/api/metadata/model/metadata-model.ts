import * as mongoose from "mongoose";
import { User } from "./../../user/model/user-model";
import UserMongo from "./../../user/model/user-model";
import { Category } from "./../../category/model/category-model";
import CategoryMongo from "./../../category/model/category-model";
import { Metadata } from "./../../metadata/model/metadata-model";
import MetadatayMongo from "./../../metadata/model/metadata-model";
import { List } from "lodash";

const types = ['image', 'mp4', 'youtube'];

export interface Metadata {
    _id?: string,    
    link: string,
    type: string
}

let schema = new mongoose.Schema({
    link: {type: String, required: true},
    type: {type: String, required: true, enum: types}
});

export default schema;
