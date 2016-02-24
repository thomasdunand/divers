var _ = require('lodash');

module.exports = function routes(app) {

  app.get('/hello', function(req, res, next){
    res.send('world')
  });


};

