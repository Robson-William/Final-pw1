import express from "express";
import * as favoritoController from "../controllers/favoritoController.js";

const routerFavorito = express.Router();

// API
routerFavorito.post("/add", favoritoController.add);
routerFavorito.get("/readAll", favoritoController.readAll);
routerFavorito.get("/readOne", favoritoController.readOne);
routerFavorito.put("/update/:id", favoritoController.update);
routerFavorito.delete("/delete/:id", favoritoController.deleteFav);

// Aplicação
routerFavorito.get("/index", favoritoController.index);
routerFavorito.get("/favorito");

export default routerFavorito;
