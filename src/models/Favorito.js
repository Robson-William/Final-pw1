import { connect } from "../database/banco.js";

async function create(dados) {
  const sql = `
    INSERT INTO favoritos(titulo, link, categoria)
    VALUES (?, ?, ?)
    `;

  const db = await connect();

  const { titulo, link, categoria } = dados;

  const criado = await db.run(sql, [titulo, link, categoria]);

  return criado;
}

async function readAll() {
  const sql = `
        SELECT *
        FROM favoritos
    `;

  const db = await connect();

  const favoritos = await db.all(sql);

  return favoritos;
}

async function readOne(id) {
  const sql = `
    SELECT *
    FROM favoritos
    WHERE id = ?
  `;

  const db = await conn();

  const favorito = await db.get(sql, [id]);

  return favorito;
}

async function update(dados) {
  const sql = `
    UPDATE favoritos
    SET titulo = ?, link = ?, categoria = ? 
    WHERE id = ?
  `;

  const db = await connect();

  const { id, titulo, link, categoria } = dados;

  const atualizado = await db.run(sql, [titulo, link, categoria, id]);

  return atualizado;
}

async function deleteFav(id) {
  const sql = `
    DELETE FROM favoritos
    WHERE id = ?
  `;

  const db = await connect();

  const excluido = await db.run(sql, [id]);

  return excluido;
}

export { create, readAll, readOne, update, deleteFav };
