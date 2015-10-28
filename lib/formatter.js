'use strict';

var standardFormat = require('semistandard-format');

exports.formatFile = function formatFile (grunt, file) {
  grunt.verbose.writeln('- Formatting %s', file);
  var text = grunt.file.read(file);
  text = standardFormat.transform(text);
  grunt.file.write(file, text);
  return file;
};
