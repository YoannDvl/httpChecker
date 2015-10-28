(function(require, module){
"use strict";

let app = require('koa')();
let router = require('./src/router.js');
let koaBody   = require('koa-body');

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

if(!module.parent) {
  var fn = app.callback();
  require('http').createServer(fn).listen(8888, function(err) {
	if (err) throw err;
	console.log('http server listening on port %s', this.address().port);
  });
}

module.exports = app;
})(require, module);
