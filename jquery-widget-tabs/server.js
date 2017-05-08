var express        = require('express')
var app            = express();
var path           = require('path');
var methodOverride = require('method-override');

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// GET /main.css
app.use("/public", express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/externalContent.html'));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
