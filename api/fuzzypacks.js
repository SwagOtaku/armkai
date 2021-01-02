const fuzzy = require('fuzzyset')

module.exports = async (req, res) => {
  let dict = req.query.dict
  let match = req.query.match
  
  const list = dict.split(",")
  const titles = match.split("|")
  
  var a = fuzzy(titles, false);
  
  const cloudfiles = []
  
  for (let i = 0; i < list.length; i++) {
    const best_match = a.get(list[i], null, .40);
    if (best_match) {
      var best = i
      cloudfiles.push(best)
    }
  }
  
  res.status(200).send(cloudfiles);
}
