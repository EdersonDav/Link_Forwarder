import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;

const linkSchema = new mongoose.Schema({
  clicks: { type: Number, default: 0 },
  title: { type: String, require: true },
  description: String,
  url: { type: String, require: true },
});

//Criando o model
const Link = mongoose.model("Link", linkSchema);

//Fazendo o insert
// let link = new Link({
//   clicks: 0,
//   title: "LinkedIn",
//   description: "LinkedIn Ederson",
//   url: "www.linkedin.com/in/ederson-silva-79b46110b",
// });

//Salvando no banco
// link
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

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
  app.get("/:title", async (req, res) => {
    let title = req.params.title;
    try {
      let doc = await Link.findOne({ title });
      res.redirect(doc.url);
    } catch (error) {
      res.send(error);
    }
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server Rurning port 5000");
});
