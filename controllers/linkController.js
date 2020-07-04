import Link from "../models/Link";
const controller = {
  redirect: async (req, res) => {
    let title = req.params.title;
    try {
      let doc = await Link.findOne({ title });
      res.redirect(doc.url);
    } catch (error) {
      res.send("Houve um erro");
    }
  },
};

export default controller;
