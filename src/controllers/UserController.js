const User = require("../models/User");
module.exports = {
  async store(req, res) {
      const response = await User.findOne({email: req.body.email});
      if(response) {
          return res.status(400).json({msg:"email already registred"});
      }
    await User.create(req.body)
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
  async index(req, res) {
    await User.find({}).populate("favorites")
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
  async show(req, res) {
    await User.find({ _id: req.params._id }).populate("favorites")
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
};
