/*
 * grunt-semistandard
 * https://github.com/jsfr/grunt-semistandard
 *
 * Copyright (c) 2015 Jens Fredskov
 * Licensed under the WTFPL license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-nsp-shrinkwrap');

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    standard: {
      options: {
        format: false
      },
      app: {
        src: [
          '{,lib/,tasks/}*.js'
        ]
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['semistandard']);
}
