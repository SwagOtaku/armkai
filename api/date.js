const notify = require('../Helpers/notify')
const fetch = require('node-fetch')

module.exports = async (req, res) => {
  let type = req.query.type
  let id = req.query.id

  if (type !== 'mal' && type !== 'kitsu' && type !== 'anilist') {
    console.error('Not Found')
  }
    
  await notify(type, id)
    .then((results) => {
    res.status(200).send(results)
  })
    .catch((err) => {
    res.status(404).send(err.message)
  })
};
