const UseModel = require("../models/UserModel");
const AddressModel = require("../models/AddressModel");
const ContactModel = require("../models/ContactModel");


exports.insert = [
  (req, res) => {
    const user = new UseModel({
      username: req.body.username,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
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
exports.insertWithContacts = [
  async (req, res) => {
    const rContacts = req.body.contacts;
    let savedContactIds = [];

    for (let i = 0; i < rContacts.length; i++) {
      const e = rContacts[i];

      const contact = new ContactModel({
        type: req.body.type,
        data: req.body.data,
      });
      await contact.save().then((savedContact) => {
        savedContactIds.push(savedContact._id);
      });
    }
    const user = new UseModel({
      username: req.body.username,
      contacts: savedContactIds,
      password: req.body.password,
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

exports.insertWithAddress = [
  (req, res) => {
    const address = new AddressModel({
      plotNo: req.body.address.plotNo,
      street: req.body.address.street,
      city: req.body.address.city,
      landmark: req.body.address.landmark,
      pincode: req.body.address.pincode,
      state: req.body.address.state,
      country: req.body.address.country,
    });
    address.save().then((savedAddress) => {
      const user = new UseModel({
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password,
        address: savedAddress._id,
      });
      user
        .save()
        .then((savedUser) => {
          res.send(savedUser);
        })
        .catch((err) => {
          res.send(err);
        });
    });
  },
];
exports.list = [
  (req, res) => {
    UseModel.find()
      .populate("address") 
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });
  },
];


exports.login = [
  (req, res) => {
    UseModel.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => {
        let userFound = false;
        if (user) {
          userFound = true;
        }
        res.send(userFound);
      })
      .catch((err) => {
        res.send(err);
      });
  },
];
exports.delete = [
  (req, res) => {
    UseModel.deleteOne({ _id: req.params.id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
];
