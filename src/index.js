import express from "express";
import router from "./routes/index.js";
import fs from "fs";
import { arquivoDB } from "./database/banco.js";
import * as Migration from "./migrations/migrations.js";
import nunjucks from "nunjucks";
const app = express();

(async () => {
  if (!fs.existsSync(arquivoDB)) {
    await Migration.up();
  }
})();

app.set("view engine", "html");

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, console.log("Aplicação rodando na porta 3000"));
