import * as Favorito from "../models/Favorito.js";

// API
async function add(req, res) {
  const { titulo, link, categoria } = req.body;

  const dados = { titulo, link, categoria };

  const favorito = await Favorito.create(dados);

  res.json(favorito);
}

async function readAll(req, res) {
  const favoritos = await Favorito.readAll();

  res.json(favoritos);
}

async function readOne(req, res) {
  const { id } = req.params;

  const favorito = await Favorito.readOne(id);

  res.json(favorito);
}

async function update(req, res) {
  const { id, titulo, link, categoria } = req.body;

  const dados = { id, titulo, link, categoria };

  const atualizado = await Favorito.update(dados);

  res.json(atualizado);
}

async function deleteFav(req, res) {
  const { id } = req.params;

  const deletado = await Favorito.deleteFav(id);

  res.json(deletado);
}

// Aplicação
async function index(req, res) {
  const favoritos = await Favorito.readAll();

  res.render("favoritos/index", { favoritos });
}

async function favorito(req, res) {
  res.send("Favorito");
}

async function form(req, res) {
  res.render("favoritos/form");
}

export { add, readAll, readOne, update, deleteFav, index, favorito, form };
