const Location = require("../models/Location");
module.exports = {
  async store(req, res) {
    await Location.create(req.body)
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
  async index(req, res) {
    await Location.find({})
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
  async show(req, res) {
    await Location.find({ _id: req.params._id })
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
};
