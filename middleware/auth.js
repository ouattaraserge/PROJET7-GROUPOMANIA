require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Authentifie un utilisateur.
 */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET);
    next();
  } catch {
    res.status(401).json({ message: "utilisateur non authentifié" });
  }
};
