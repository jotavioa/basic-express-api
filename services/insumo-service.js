import dao from "../db/insumo-dao.js";

async function getAll() {
  return await dao.getAllInsumos();
}

async function getById(id) {
  return await dao.getInsumosById(id);
}

async function create(insumo) {
  await dao.createInsumo(insumo);
}


export default {
  getAll,
  getById,
  create,
};