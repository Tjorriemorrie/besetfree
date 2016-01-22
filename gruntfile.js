module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                compress: true  //minifying the result
            },
            vendor: {
                files: {
                    './gae/src/static/css/vendor.min.css': [
                        //'./bower_components/bootstrap/dist/css/bootstrap.css',
                        //'./bower_components/bootstrap/dist/css/bootstrap-theme.css',
                        './bower_components/normalize-css/normalize.css'
                    ]
                }
            },
            dist: {
                files: {
                    './gae/src/static/css/besetfree.min.css': [
                        './assets/less/main.less',
                    ]
                }
            }
        },

		browserify: {
			options: {
				transform: [
					['babelify', {
						presets: ['react', 'es2015', 'stage-0']
					}]
				]
			},

			jsx: {
				files: {
					'./gae/src/static/js/besetfree.js': ['./assets/jsx/Index.jsx']
				}
			},
		},

        concat: {
            options: {
                separator: '\n'
            },
            vendor: {
                files: {
                    './gae/src/static/js/vendor.min.js': []
                }
            },
        },

        uglify: {
            options: {
                mangle: true,  // Use if you want the names of your functions and variables unchanged
            },
            jsx: {
                files: {
                    './gae/src/static/js/besetfree.min.js': [
                        './gae/src/static/js/besetfree.js',
                    ],
                }
            }
        },

        watch: {
            options: {
                spawn: false,
                reload: true,
            },

            less: {
                files: [
                    './assets/less/**/*.less'
                ],
                tasks: ['less:dist'],
                options: {
                    livereload: true,
                }
            },

            jsx: {
                files: [
                    './assets/jsx/**/*.jsx'
                ],
                tasks: ['browserify:jsx'],
                options: {
                    livereload: true,
                    debounceDelay: 8000,
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'browserify', 'concat', 'uglify', 'watch']);
};
