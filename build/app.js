"use strict";var express=require("express"),bodyParser=require("body-parser"),cookieParser=require("cookie-parser"),favicon=require("serve-favicon"),path=require("path"),index=require("./build/routes/index"),PORT=7441,app=express();app.set("view engine","pug"),app.set("views","./build/views"),app.use(favicon(path.join(__dirname,"build","favicon.ico"))),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(cookieParser()),app.use("/build",express.static("build")),app.use("/",index),app.use(function(e,r,s){var p=new Error("Not Found");p.status=404,s(p)}),app.listen(7441),module.exports=app;