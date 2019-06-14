const express = require('express');
const rp = require('request-promise');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/cryptos', (req, res) => {
    const requestOptions = {
        method: 'GET',
        uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          'start': '1',
          'limit': '100',
          'convert': req.query.currency
        },
        headers: {
          'X-CMC_PRO_API_KEY': 'd46077a7-2259-4929-8426-bc746ff8b5d1'
        },
        json: true,
        gzip: true
      };
      
      rp(requestOptions).then(response => {
        res.json(response)
      }).catch((err) => {
        console.log('API call error:', err.message);
      });
});

app.get('/api/crypto', (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
      'id': req.query.id,
      'convert': req.query.currency
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'd46077a7-2259-4929-8426-bc746ff8b5d1'
    },
    json: true,
    gzip: true
  };
  
  rp(requestOptions).then(response => {
    res.json(response)
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
});

app.get('/api/bitcoin', (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
      'symbol': 'BTC',
      'convert': req.query.currency
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'd46077a7-2259-4929-8426-bc746ff8b5d1'
    },
    json: true,
    gzip: true
  };
  
  rp(requestOptions).then(response => {
    res.json(response)
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
});

const port = process.env.PORT || 3003;

app.listen(port);