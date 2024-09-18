
const UseModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
exports.register = [async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UseModel({
      username: req.body.username,
      email: req.body.email,
      contact: req.body.contact,
      password: hashedPassword,
    });
    user
      .save()
      .then((savedUser) => {
        res.send(savedUser);
      })
      .catch((err) => {
        res.send(err);
      });
  },
];


exports.signin = [(req, res) => {
    UseModel.findOne({
      username: req.body.username,

    })
      .then(async(user) => {
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch) {
          res.send(true);
        }
        res.send(false);
      })
      .catch((err) => {
        res.send(err);
      });
    }]