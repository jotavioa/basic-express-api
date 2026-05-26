import express from "express";
import dotenv from 'dotenv'
import bodyparser from 'body-parser'

import insumoController from "./controllers/insumo-controller.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json({limit: '2mb'}));

app.get("/", (req, res) => {
	console.log("Received a request at /");
	res.send("Api root");
});

app.get("/status", (req, res) => {
	res.send("running...");
});

app.use("/insumo", insumoController);

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
