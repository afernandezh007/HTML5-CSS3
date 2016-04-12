module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
          files: {
              "style.css": "less/style.less"
          }
      },
      production: {
          options: {
            compress: true
          },
          files: {
              "style.css": "less/style.less"
          }
      }
    },

    browserSync: {
        dev: {
            bsFiles: {
                src: ['*.css', '*.html']
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    },

    watch: {
      styles: {
        files: ['less/*.less'],
        tasks: ['less:development']
      }
    }

  });

  // Loads the plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'browserSync', 'watch']);
  grunt.registerTask('production', ['less:production']);

};