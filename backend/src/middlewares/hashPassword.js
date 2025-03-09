const { hash, argon2id } = require("argon2");

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(password, hashingOptions)
    .then((hashedpassword) => {
      req.body.password = hashedpassword;
      // delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = hashPassword;
