import * as mongoose from "mongoose";
import { List } from "lodash";
import { Route } from "../../route/model/route-model";
import RouteMongo from "../../route/model/route-model";

export interface Page {
    _id?: string,    
    pageContent: string,
    route: Route,
    createdAt: Date
}

let schema = new mongoose.Schema({
    pageContent: {type: String, required: true},
    route: {type: RouteMongo, unique : true, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
