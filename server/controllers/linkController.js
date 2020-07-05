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
      res.redirect("/");
    } catch (error) {
      res.render("add", { error, body: req.body });
    }
  },

  deleteLink: async (req, res) => {
    let linkid = req.params.id;
    if (!linkid) {
      linkid = req.body.id;
    }
    try {
      await Link.findByIdAndDelete(linkid);
      res.redirect("/");
    } catch (error) {
      res.status(404).send(error);
    }
  },

  loadLink: async (req, res) => {
    let linkid = req.params.id;
    try {
      let doc = await Link.findById(linkid);
      res.render("edit", { error: false, body: doc });
    } catch (error) {
      res.status(404).send(error);
    }
  },

  editLink: async (req, res) => {
    let link = {};
    link.title = req.body.title;
    link.url = req.body.url;
    link.description = req.body.description;
    try {
      let linkid = req.params.id;
      if (!linkid) {
        linkid = req.body.id;
      }
      let doc = await Link.updateOne({ _id: linkid }, link);
      res.redirect("/");
    } catch (error) {
      res.render("edit", { error, body: req.body });
    }
  },
};

export default controller;
