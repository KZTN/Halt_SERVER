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
  async update(req, res) {
    const user = await User.find({ _id: req.params._id })
    if(user) {
      if(req.body.thumbnail) {
        await User.update({ _id: req.params._id }, {thumbnail: req.body.thumbnail})
      }
      if(req.body.name) {
        await User.update({ _id: req.params._id }, {name: req.body.name})
      }
      if(req.body.phone) {
        await User.update({ _id: req.params._id }, {phone: req.body.phone})
      }
      if(req.body.password) {
        await User.update({ _id: req.params._id }, {password: req.body.password})
      }
      return res.json({msg: "ok"});
    }
  },
};
