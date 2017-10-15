"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    picture: { type: String, required: true },
    links: { type: Array },
    active: { type: Boolean },
    createdAt: { type: Date, default: Date.now }
});
exports.default = schema;
//# sourceMappingURL=carousel-model.js.map