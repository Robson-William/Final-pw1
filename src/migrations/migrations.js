import { connect } from "../database/banco.js";

async function up() {
  const db = await connect();

  await db.run(`
    CREATE TABLE IF NOT EXISTS favoritos(
        titulo TEXT,
        link TEXT,
        categoria TEXT
    )
  `);
}

export { up };
