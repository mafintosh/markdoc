#!/usr/bin/env node

var markdoc = require('./index');
var filename = process.argv[2];

if (!filename || filename === '--help') {
	console.error('usage: markdoc filename');
	return;
}

console.log((/\.md$/i.test(filename) ? markdoc.parse : markdoc.parseCode)(require('fs').readFileSync(filename, 'utf-8')));

