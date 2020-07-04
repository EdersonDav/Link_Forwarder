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

  addLink: async (req, res) => {
    let link = new Link(req.body);
    try {
      let doc = await link.save();
      res.send(doc);
    } catch (err) {
      res.send(err);
    }
  },
};

export default controller;
