const dubs = require('../Helpers/mal_anime_dub')

module.exports = async (req, res) => {
  res.status(200).send(dubs);
};
