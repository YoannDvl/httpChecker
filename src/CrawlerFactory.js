(function(require, module){
"use strict";
let SPCrawler = require("simplecrawler");

const _defaultUA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36 HTTPChecker.website';

class CrawlerFactory {
	static create(startPath, depth, interval, concurrency, timeout) {
		var startUrl = require("url").parse(startPath, false, true)
		var crawler = new SPCrawler(startUrl.hostname, startUrl.path);
		crawler.initialPort = startUrl.port || startUrl.protocol==="https" && 443 || 80;
		crawler.initialProtocol = startUrl.protocol || "http";
		crawler.maxDepth = depth || 3;
		crawler.maxConcurrency = concurrency || 2;
		crawler.userAgent = _defaultUA;
		crawler.downloadUnsupported = false;
		crawler.acceptCookies=true;
		crawler.parseHTMLComments=false;
		crawler.fetchWhitelistedMimeTypesBelowMaxDepth=true;
		crawler.ignoreInvalidSSL=true;

		return crawler;
	}
}

module.exports = CrawlerFactory;
})(require, module)
