var _ = require('lodash');
var request = require('request');
var cheerio = require('cheerio');

module.exports = function routes(app) {

  app.get('/hello', function(req, res, next){
    var url = 'http://www.ratp.fr/horaires/fr/ratp/metro/prochains_passages/PP/bonne+nouvelle/8/A';
    request(url, function (error, response, body) {
      var $ = cheerio.load(body);
      var data = {line:'9',station:'Bonne nouvelle',next:[]};
      $('#prochains_passages').find('.metro').find('table').find('tbody').find('tr').each(function (i, col) {
        var line = $(col).find('td').eq(1).text();
        data.next.push(line);
      });
      res.send(data);
    })

  });


};

