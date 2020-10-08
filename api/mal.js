const clientId = 'a8d85a4106b259b8c9470011ce2f76bc';

module.exports = async (req, res) => {
  let challenge = generateRandomString();
  let state = challenge;
  let url = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${clientId}&state=${state}&code_challenge=${challenge}&code_challenge_method=plain`;
  let html = '<script type="text/javascript">window.location.replace("' + url + '")</script>'
  
  function generateRandomString() {
    let length = 50
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  res.status(200).send(html);
};
