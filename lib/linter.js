'use strict';

var P = require('promise');
var standard = require('semistandard');

exports.lintFiles = P.denodeify(standard.lintFiles.bind(standard));
