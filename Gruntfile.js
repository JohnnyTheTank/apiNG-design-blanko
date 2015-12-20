module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/aping-design-blanko.min.js' : ['src/aping-design-blanko.js']
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> v<%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) by <%= pkg.author %> */\n',
            }
        },
        sass: {
            distMin: {
                options: {                       // Target options
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-blanko.min.css': 'src/aping-design-blanko.scss'
                }
            },
            dist: {
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/aping-design-blanko.css': 'src/aping-design-blanko.scss'
                }
            }
        },
        copy: {
            blanko: {
                src: 'src/aping_design_blanko.html',
                dest: 'dist/aping_design_blanko.html',
            }
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/aping-design-blanko.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                },
            },
            minifySCSS: {
                files: [
                    'src/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            },
            copy_default_template: {
                files: [
                    'src/*.html'
                ],
                tasks: ['copy'],
                options: {
                    spawn: true,
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);

};

