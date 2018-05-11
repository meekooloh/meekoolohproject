import * as mongoose from "mongoose";
import { List } from "lodash";

export interface Route {
    _id?: string,    
    label: string,
    route: string,
    createdAt: Date
}
export interface RouteModel {
    _id?: string,    
    label: string,
    route: string,
    createdAt?: Date
}

let schema = new mongoose.Schema({
    label: {type: String, required: true},
    route: {type: String, unique : true, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
