import { Database } from "sqlite-async";

const arquivoDB = "./database.sqlite";

async function connect() {
  return await Database.open(arquivoDB);
}

export { connect, arquivoDB };
