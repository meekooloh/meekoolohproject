import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
    picture: {type: String, required: true},
    links: {type: Array},
    active: {type: Boolean},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
