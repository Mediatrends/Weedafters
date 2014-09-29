module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch:{
			configFiles:{
				files:['prod/sass/**/*.scss','prod/js/**/*.js','app/**/*.php'],
				tasks:['wiredep'],
				options:{
					livereload: true,
				},
			},
			sass:{
				files:['prod/sass/**/*.scss'],
				tasks: ['sass'],
				options:{
					livereload:true,
				},
			},
			javascript:{
				files:['prod/js/**/*.js','Gruntfile.js'],
				tasks:['jshint','uglify'],
				options:{
					livereload:true,
				},
			},
		},
		wiredep:{
			target:{
				src:[
					'app/wp-content/themes/dw-minion/header.php'
				],
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/wp-content/themes/dw-minion/assets/css/main_mt.css': 'prod/sass/main.scss'
				},
			},
		},
		jshint:{
			all:[
				'Gruntfile.js','prod/js/**/*.js'
			]
		},

		uglify:{
			all:{
				files:{
			        'app/wp-content/themes/dw-minion/assets/js/output.min.js': ['prod/js/scripts.js']
			    }
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('default', ['wiredep','sass','uglify']);
};