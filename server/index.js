import express from "express";
const app = express();
const PORT = 5000;
import router from "./routes/router";
import connectDB from "./database/connectiondatabase";
import path from "path";

connectDB();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

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
