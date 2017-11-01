import * as mongoose from "mongoose";

export interface Category {
    _id?: String,
    level: String,
    label: String,
    value: String,
    createdAt?: Date
}

let schema = new mongoose.Schema({
    level: {type: String, required: true, trim: true},
    label: {type: String, required: true, trim: true},
    value: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
