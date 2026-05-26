import { connect } from "./db.js";

async function getAllInsumos() {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM insumo");
    return res.rows;
  } catch (error) {
    console.error("Error fetching insumos:", error);
    throw error;
  } finally {
    client.release();
  }
}

async function getInsumosById(id) {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM insumo WHERE codigo = $1", [id]);
    return res.rows[0];
  } catch (error) {
    console.error("Error fetching insumos:", error);
    throw error;
  } finally {
    client.release();
  }
}

async function createInsumo(insumo) {
  const client = await connect();

  try {
    const res = await client.query(
      "INSERT INTO insumo (nome, valor, unidadedemedida) VALUES ($1, $2, $3) RETURNING *",
      [insumo.nome, insumo.valor, insumo.unidadedemedida],
    );
    return res.rows[0];
  } catch (error) {
    console.error("Error creating insumo:", error);
    throw error;
  } finally {
    client.release();
  }
}

export default {
  getAllInsumos,
  getInsumosById,
  createInsumo,
};
