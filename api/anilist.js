const clientId = '2009';

module.exports = async (req, res) => {
  let url = `https://anilist.co/api/v2/oauth/authorize?client_id=${clientId}&response_type=token`;
  let html = '<script type="text/javascript">window.location.replace("' + url + '")</script>'

  res.status(200).send(html);
};
