/// <reference path="../typings/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === "production")
    require("newrelic");
var PORT = process.env.PORT || 3333;
var express = require("express");
var os = require("os");
var http2 = require("spdy");
var fs = require("fs");
var routes_conf_1 = require("./config/routes.conf");
var db_conf_1 = require("./config/db.conf");
var index_1 = require("./routes/index");
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
routes_conf_1.RoutesConfig.init(app);
db_conf_1.DBConfig.init();
index_1.Routes.init(app, express.Router());
var opts = {
    key: fs.readFileSync(__dirname + "/cert/server.key"),
    cert: fs.readFileSync(__dirname + "/cert/server.crt")
};
http2.createServer(opts, app)
    .listen(PORT, function () {
    console.log("up and running @: " + os.hostname() + " on port: " + PORT);
    console.log("enviroment: " + process.env.NODE_ENV);
});
