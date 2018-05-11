import * as mongoose from "mongoose";
import { List } from "lodash";
import Route from "../../route/dao/route-dao";

export interface Page {
    _id?: string,    
    pageContent: string,
    route: string,
    createdAt: Date
}

let schema = new mongoose.Schema({
    pageContent: {type: String, required: true},
    route: {type: Route, unique : true, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
