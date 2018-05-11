import * as mongoose from "mongoose";
import { List } from "lodash";

export interface Component {
    _id?: string,    
    input: any,
    name: string,
    image: string,
    createdAt: Date
}

let schema = new mongoose.Schema({
    input: {type: Object},
    name: {type: String, required: true},
    image: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
