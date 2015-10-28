'use strict';

var P = require('promise');
var semistandard = require('semistandard');

exports.lintFiles = P.denodeify(semistandard.lintFiles.bind(semistandard));
