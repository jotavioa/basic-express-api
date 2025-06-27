import express from "express";

var controller = express.Router();

controller.get("/", function (req, res) {
	res.send("Auth controller root route.");
});

controller.get("/test", function (req, res) {
	res.send("Auth controller test route.");
});

export default controller;
