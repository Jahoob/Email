module.exports = function(grunt) {
   grunt.registerTask('default', '', function() {
    grunt.log.write("test janko")
   });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            combine: {
                files: {
                    'css/style2.css': ['scss/style.scss']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/zippedjs.min.js': ['js/script.js']
                }
            }
        },
        concat: {
            js: {
                src: ['js/**/*.js'],
                dest: 'build/js/scripts.js'
            },
            scss: {
                src: ['scss/**/*.sccs'],
                dest: 'build/css/styles3.scss'
            }
          },
        watch: {
            js: {
              files: ['*js/**/*.js'],
              tasks: ['concat:js'],
            },

            scss: {
                files: ['*scss/**/*.sccs'],
                tasks: ['concat'],
            }
          },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'watch']);

};