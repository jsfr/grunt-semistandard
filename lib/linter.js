'use strict';

var P = require('promise');
var semistandard = require('semistandard');

exports.lintFiles = P.denodeify(standard.lintFiles.bind(semistandard));
