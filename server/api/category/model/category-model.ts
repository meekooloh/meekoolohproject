import * as mongoose from "mongoose";

export interface Category {
    _id?: string,
    label: string,
    level: Number,
    value: Number,
    createdAt?: Date
}

let schema = new mongoose.Schema({
    label: {type: String, required: true, trim: true},
    level: {type: Number, required: true},
    value: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});

// schema.index({ level: 1, value: 1 }, { unique: true });

export default schema;
