const fuzzy = require('fuzzyset')

module.exports = async (req, res) => {
  let dict = req.query.dict
  let match = req.query.match
  
  const list = dict.split(",")
  const titles = match.split("|")
  
  var a = fuzzy(list, false);
  
  const cloudfiles = []
  
  for (let i = 0; i < titles.length; i++) {
    const best_match = a.get(titles[i], null, .40);
    if (best_match) {
      for (let k = 0; k < best_match.length; k++) {
        var best = best_match[k][1].slice(-1)
        cloudfiles.push(best)
      }
    }
  }
  
  res.status(200).send(cloudfiles);
}
