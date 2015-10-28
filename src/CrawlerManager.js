(function(){
"use strict";

class CrawlerManager {
	constructor() {
		this.runningCrawlers = [];
        };

	register(crawler) {
		this.runningCrawlers.push(crawler)
		return this.runningCrawlers.length;
	}; 

	static get singletonInstance () {
		if(CrawlerManager._singletonInstance==null) {
			CrawlerManager._singletonInstance = new CrawlerManager();
		}
		return CrawlerManager._singletonInstance;
	}
}

var singleton = CrawlerManager.singletonInstance;
module.exports = singleton;
})();
