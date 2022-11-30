import express from "express";
import * as favoritoController from "../controllers/favoritoController.js";
import routerFavorito from "./favoritos.js";

const router = express.Router();

router.use("/api", routerFavorito);

// Aplicação
router.get("/index", favoritoController.index);
router.get("/favorito", favoritoController.favorito);
router.get("/criar", favoritoController.form);

export default router;
