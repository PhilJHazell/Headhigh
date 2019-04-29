module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            target: {
                files: {
                    'public_html/assets/js/min/custom.min.js': ['public_html/assets/js/custom.js'],
                    'public_html/assets/js/min/macy.min.js': ['public_html/assets/js/macy.js'],
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public_html/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public_html/assets/css/build/',
                    ext: '.min.css'
                }]
            },
            options: {
                advanced: false
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public_html/assets/css/build/custom.min.css': 'public_html/assets/css/scss/custom.scss'
                }
            }
        },
        concat: {
            target: {
                src: ['public_html/assets/css/build/style.min.css','public_html/assets/css/build/custom.min.css','public_html/assets/css/build/responsive.min.css'],
                dest: 'public_html/assets/css/min/main.min.css'
            }
        },
        watch: {
            js: {
                files: ['public_html/assets/*.js', 'public_html/assets/js/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['public_html/assets/css/*.css','public_html/assets/css/scss/*.scss'],
                tasks: ['css']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('css', ['sass','cssmin','concat']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('default', ['css','js']);

};
