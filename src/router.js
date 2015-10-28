(function(require, module){
"use strict";

var router = require('koa-router')();
var CrawlerFactory = require('./CrawlerFactory.js');
var CrawlerManager = require('./CrawlerManager.js');

// map doc.html to '/' 
router.get('/', function *(next) {
  this.body = 'HTTPChecker REST API documentation will be here in a few weeks!';
  yield* next;
});

router.get('/result/:id', function *(next) {

});

router.post('/check', function *(next) {
  console.log(this.request.body.url, this.request.body);
  this.body = CrawlerManager.register(CrawlerFactory.create("http://free.fr"));  
});

module.exports = router;
})(require, module);
