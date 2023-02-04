const jwt = require("jsonwebtoken");

// TODO: créer la fonction generateToken
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

// TODO: créer la fonction decodeToken
function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  generateToken,
  decodeToken,
};
