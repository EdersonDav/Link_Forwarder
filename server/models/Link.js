import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  clicks: { type: Number, default: 0 },
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
});
//Criando o model
const Link = mongoose.model("Link", linkSchema);
export default Link;
