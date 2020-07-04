import mongoose from "mongoose";
const connection = () => {
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
};
export default connection;
