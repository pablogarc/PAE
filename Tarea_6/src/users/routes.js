const router = require("express").Router();
const controller = require("./controller");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.body.token;
  if (!token) return res.status(403).send("No token present");
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
  next();
};

router.get("/auth", controller.getToken);
router.get("/", verifyTokenMiddleware, controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.newUser);
router.post("/login", controller.login);

module.exports = router;
