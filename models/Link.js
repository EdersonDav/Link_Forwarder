import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  clicks: { type: Number, default: 0 },
  title: { type: String, require: true },
  description: String,
  url: { type: String, require: true },
});

//Criando o model
const Link = mongoose.model("Link", linkSchema);

export default Link;
