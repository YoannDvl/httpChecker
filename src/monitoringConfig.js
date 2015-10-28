"use strict";

var Document = require('camo').Document;
var EmbeddedDocument = require('camo').EmbeddedDocument;

class Header extends EmbeddedDocument {
	constructor() {
		this.name = { type: String, regex: "[^=,;:\s\t\r\n\v\f]+"};
		this.value = String;
		this.domains = [String]; // domain for which the headerr should be set
	}
}

class Post extends EmbeddedDocument {
        constructor() {
                this.name = String;
                this.value = String;
                this.domains = [String]; // domain for which the headerr should be set
        }
}

class MonitoringConfig extends Document {
    constructor() {
        super('monitoringConfig');

        this.name = String;
	this.homepage = String;
	this.upTimeIntervale = { type: Number, default: 5, min: 1 };
        this.crawlIntervale = { type: Number, default: 60, min: 1 };
	// list of url from where to start crawling
        this.urls = [String];
	// can specify a sitemap for the crawler to use
	this.sitemap = String;
	// robots.txt + meta robots
	this.respectRobots = { type: Boolean, default: true};
	// foriden url (contains patern will e use)
	this.foridenUrl = [String]
	// Http headers to add to each request
	this.headers = [Header];
	// Post data
	this.post = [Post];
    }
}

module.exports = {MonitoringConfig, Header, Post};
