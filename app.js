var app = require('koa')();
var router = require('koa-router')();
var staticServer = require('koa-file-server')({ root: './public', maxage: '31536000000' });

// serve static resources
app.use(staticServer);

// map index.html to '/' to add server push if available
router.get('/', function *(next) { 
	yield* this.fileServer.send('index.html');
});

// route for user actions
router.get('/hello', function *(next) { this.body = 'Hello World!'; });

app.use(router.routes()).use(router.allowedMethods());
 
var fn = app.callback();

require('http').createServer(fn).listen(8080, function (err) {
  if (err) throw err;
  console.log('Koala app listening on port %s', this.address().port);
});
