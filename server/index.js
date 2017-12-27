require("babel-core/register");
require("babel-polyfill");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});
const scrape = require('./scrape');


app.get('/', function(req, res) {
    scrape().then((value) => {
        res.send({
            data:value
        });
    });
 
})

app.listen(5000, () => console.log('Example app listening on port 5000!'))


