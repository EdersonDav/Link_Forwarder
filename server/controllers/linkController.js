import Link from "../models/Link";
const controller = {
  allLinks: async (req, res) => {
    try {
      let links = await Link.find({});
      res.render("all", { links });
    } catch (error) {
      res.send(error);
    }
  },

  redirect: async (req, res, next) => {
    let title = req.params.title;
    try {
      let doc = await Link.findOne({ title });
      if (doc) {
        res.redirect(doc.url);
      } else {
        next();
      }
    } catch (error) {
      res.send("Houve um erro");
    }
  },

  addLink: async (req, res) => {
    let link = new Link(req.body);
    try {
      let doc = await link.save();
      res.send("Link adicionado com sucesso");
    } catch (error) {
      res.render("index", { error, body: req.body });
    }
  },

  deleteLink: async (req, res) => {
    let linkid = req.params.id;
    if (!linkid) {
      linkid = req.body.id;
    }
    try {
      res.send(await Link.findByIdAndDelete(linkid));
    } catch (error) {
      res.render(error);
    }
  },
};

export default controller;
