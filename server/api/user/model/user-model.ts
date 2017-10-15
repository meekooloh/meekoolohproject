import * as mongoose from "mongoose";

let user = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    firstname: {type: String, required: true, trim: true},
    surstname: {type: String, required: true, trim: true},
    password: {type: String, required: false},
    lastAccess: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now}
});

export default user;