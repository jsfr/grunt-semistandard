/**
 * grunt-semistandard
 * https://github.com/jsfr/grunt-semistandard
 *
 * Copyright (c) 2015 Jens Fredskov
 * Licensed under the WTFPL license.
 */

'use strict';

var formatter = require('../lib/formatter').formatFile;
var reporter = require('../lib/reporter').reporter;
var lintFiles = require('../lib/linter').lintFiles;

module.exports = function (grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('semistandard', 'Grunt plugin for standard linter.', function () {
    var done = this.async();
      // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      format: false,
      lint: true
    });

    if (options.format) {
      grunt.log.subhead('Formatting files...');
      this.filesSrc.forEach(function (file) {
        formatter(grunt, file);
      });
    }

    if (options.lint) {
      grunt.log.subhead('Linting files...');
      lintFiles(this.filesSrc).then(function (data) {
        var success = reporter(grunt, data);
        done(success);
      }).catch(function (err) {
        grunt.fail.fatal(err.toString());
        done(false);
      });
    };
  });
};

