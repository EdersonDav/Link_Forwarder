import express from "express";
import linkController from "../controllers/linkController";
const router = express.Router();

router.get("/:title", linkController.redirect);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post(
  "/",
  express.urlencoded({ extended: true }),
  linkController.addLink
);

export default router;
