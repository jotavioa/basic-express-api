import express from "express";
import dotenv from 'dotenv'

import authController from "./controllers/auth-controller.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
	console.log("Received a request at /");
	res.send("Api root");
});

app.get("/status", (req, res) => {
	res.send("running...");
});

app.use("/auth", authController);

app.listen(port, () => {
    console.log(`API is running on port ${port} in the ${env} environment`);
});
