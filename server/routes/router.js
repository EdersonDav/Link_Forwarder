import express from "express";
import linkController from "../controllers/linkController";
const router = express.Router();

router.get("/all", linkController.allLinks);

router.get("/:title", linkController.redirect);

router.get("/", (req, res) => {
  res.render("index", { error: false, body: {} });
});

router.post(
  "/",
  express.urlencoded({ extended: true }),
  linkController.addLink
);

router.delete("/:id", linkController.deleteLink);

router.delete(
  "/",
  express.urlencoded({ extended: true }),
  linkController.deleteLink
);

export default router;
