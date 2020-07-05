import express from "express";
import linkController from "../controllers/linkController";
import overrite from "method-override";
const router = express.Router();

router.use(overrite("_method"));

router.get("/", linkController.allLinks);
router.get("/:title", linkController.redirect);
router.get("/add", (req, res) => {
  res.render("add", { error: false, body: {} });
});
router.get("/edit/:id", linkController.loadLink);

router.post(
  "/add",
  express.urlencoded({ extended: true }),
  linkController.addLink
);
router.post(
  "/edit/:id",
  express.urlencoded({ extended: true }),
  linkController.editLink
);

router.delete("/:id", linkController.deleteLink);
router.delete(
  "/",
  express.urlencoded({ extended: true }),
  linkController.deleteLink
);

export default router;
