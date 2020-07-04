import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;

const loinkSchema = new mongoose.Schema({
  clicks: Number,
  title: String,
  description: String,
  url: String,
});

//Criando conexão com o banco
mongoose.connect("mongodb://localhost/links", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//Mensagem para evento de erro
db.on("error", () => {
  console.log("Houve um erro");
});

//Mensagem que mostra apenas uma vez
db.once("open", () => {
  console.log("Banco conectado");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server Rurning port 5000");
});
