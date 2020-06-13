const Location = require("../models/Location");

module.exports = {
  async store(req, res) {
    await Location.update({ _id: req.body.location_id }, {$push: {comments: {author: req.body.author, comment: req.body.comment, rate: req.body.rate}}}).then(() => {
        return res.json({msg: "ok"})
    }).catch((error) => {
        return res.json(error);
    });
  },
};
