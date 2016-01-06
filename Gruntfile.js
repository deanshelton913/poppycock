'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      browserify_with_babel: {
        command: function () {
          return 'browserify -t [ babelify --presets [ react ] ] app/assets/js/client.js -o public/javascripts/client.js';
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false,
        },
        files: {
          'public/stylesheets/app.css':'app/assets/scss/app.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['app/assets/{,**/}*.{scss,sass}'],
        tasks: ['sass:dev']
      },
      scripts: {
        files: ["app/assets/js/*.js", "app/assets/js/views/*.js"],
        tasks: ["shell:browserify_with_babel"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['shell:browserify_with_babel','sass:dev']);
  grunt.registerTask('default', ['build','watch']);
};