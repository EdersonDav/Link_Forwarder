import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;
import router from "./routes/router";

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

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server Rurning port 5000");
});

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
