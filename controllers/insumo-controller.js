import express from "express";

import service from "../services/insumo-service.js";

var controller = express.Router();

controller.get("/", async (req, res) => {
  const lista = await service.getAll();
  res.status(200).json(lista);
});

controller.get("/:id", async (req, res) => {
  const insumo = await service.getById(req.params.id);
  res.status(200).json(insumo);
});

controller.post("/", async (req, res) => {
  const data = req.body;

  await service.create(data);

  res.status(201).json();
});

export default controller;
