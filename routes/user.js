module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const auth = require("../middleware/auth");

  var router = require("express").Router();

  // Create a new users
  router.post("/register", users.create);

  //login users
  router.post("/login", users.login);
  router.put("/:id", auth, users.modifyUser);
  router.delete("/:id", auth, users.deleteUser);
  router.get("/:id", auth, users.getOneUser);
  router.get("/", auth, users.getAllUser);

  app.use("/api/user", router);
};
