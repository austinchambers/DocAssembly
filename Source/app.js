'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var Docxtemplater = require('docxtemplater');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/convert']) {
    console.log('try this:\ncurl -X GET -G http://127.0.0.1:' + port + '/convert -d replacementJson={%22firstname%22:%22asdf%22,%22lastname%22:%22sdf%22} -d templateName=input.docx');
  }

  if (swaggerExpress.runner.swagger.paths['/download']) {
    console.log('try pointing your browser at:\nhttp://127.0.0.1:' + port + '/download?documentName=input.docx');
  }


});
