const axios = require('axios');
const querystring = require('querystring');

const client_id = '2041838255353450';
const client_secret = '66wVdN2eadDDETYTg4j1uWM8kAL4oov0';
const redirect_uri = 'SEU_REDIRECT_URI';
const authorization_code = 'SEU_AUTHORIZATION_CODE';

const data = {
  grant_type: 'authorization_code',
  client_id,
  client_secret,
  redirect_uri,
  code: authorization_code,
};

axios.post('https://api.mercadolibre.com/oauth/token', querystring.stringify(data), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});