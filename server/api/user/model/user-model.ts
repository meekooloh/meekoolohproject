import * as mongoose from "mongoose";

export interface User {
    username: string,
    firstname: string,
    surstname: string,
    password: string,
    lastAccess: Date,
    createdAt: Date
}

let user = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    firstname: {type: String, required: true, trim: true},
    surstname: {type: String, required: true, trim: true},
    password: {type: String, required: false},
    lastAccess: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now}
});

export default user;
