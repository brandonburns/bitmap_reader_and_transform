'use strict'

var fs = require('fs');
var oldFile = process.argv[2].toString();
var bitmap = fs.readFileSync(oldFile);

var displayBMPProps = require('./lib/readFile');
var randomize = require('./lib/randomize');
var greyScale = require('./lib/greyScale')

displayBMPProps(bitmap);

// randomize(bitmap, oldFile);

greyScale(bitmap, oldFile);
