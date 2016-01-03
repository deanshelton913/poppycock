'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['app/views/**/*.jsx', 'app/assets/js/**/*.js'],
        dest: 'public/javascripts/client.js',
      },
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
        files: ['app/assets/{,**/}*.{scss,sass,js}', 'app/views/**.jsx'],
        tasks: ['sass:dev', 'concat:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', [
   'watch'
  ]);
};