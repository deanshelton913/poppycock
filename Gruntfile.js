'use strict';
module.exports = function(grunt) {

   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     project: {
         app: ['app'],
         assets: ['<%= project.app %>/assets'],
         scss: ['<%= project.assets %>/scss/app.scss'],
         public: ['public']
     },
     sass: {
         dev: {
             options: {
                 style: 'expanded',
                 compass: false,
             },
             files: {
                 '<%= project.public %>/stylesheets/app.css':'<%= project.scss %>'
             }
         }
     },
     watch: {
         sass: {
             files: '<%= project.assets %>/scss/{,*/}*.{scss,sass}',
             tasks: ['sass:dev']
         }
     }
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-express');

   grunt.registerTask('default', [
     'watch'
   ]);

};