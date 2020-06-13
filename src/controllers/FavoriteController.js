const User = require("../models/User");

module.exports = {
  async store(req, res) {
    await User.update({ _id: req.body._id }, {$push: {favorites: req.body.favorite_id}}).then(() => {
        return res.json({msg: "ok"})
    }).catch((error) => {
        return res.json(error);
    });
  },
  async remove(req, res) {
    await User.update({ _id: req.body._id }, {$pull: {favorites: req.body.favorite_id}}).then(() => {
        return res.json({msg: "ok"})
    }).catch((error) => {
        return res.json(error);
    });
  },
};
