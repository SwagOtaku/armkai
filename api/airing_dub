const notify = require('../Helpers/notify')
const fetch = require('node-fetch')
const cheerio = require('cheerio').load

module.exports = async (req, res) => {
  const res_mal = await fetch('https://myanimelist.net/forum/?topicid=1692966')
  const data = await res_mal.text()
  const $ = cheerio(data)
  //const mal = $('#message53389787 li').each(function(i, elm) {
  //  $(elm).text() // for testing do text() 
  //})
  
  var list = [];
  const links = $('#message53389787 li').each(function (index, element) {
    if ($(element).find('a').attr('rel') == 'nofollow' && !['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].some(substring=>$(element).text().includes(substring))) {
      var dict = {}
      dict[$(element).find('a').attr('href')] = $(element).text()
      list.push(dict);
    }
  });
  
  res.status(200).send(list);
};
