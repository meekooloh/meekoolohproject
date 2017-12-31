import * as mongoose from "mongoose";
import { List } from "lodash";

export interface Carousel {
    picture: string,
    links: List<String>,
    active: Boolean,
    createdAt: Date
}
let schema = new mongoose.Schema({
    picture: {type: String, required: true},
    links: {type: Array},
    active: {type: Boolean},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
