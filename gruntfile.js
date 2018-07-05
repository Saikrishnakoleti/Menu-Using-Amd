
module.exports = function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		sass: {
				options: {
					sourceMap: true
				},
			dist: {
				files: {
					'ui/css/main.css': 'ui/scss/main.scss'
				}
			}
		},
		watch:{
				w1:{
					 files:['ui/*.html','ui/**/*.scss'],
					 tasks:['copy']
				}
		},
		copy: {
		  main: {
		    files: [
		      // includes files within path
		      {expand: true, cwd: 'ui/', src: ['**'], dest: 'dist/'},  
		      {expand:true, cwd:'node_modules/bootstrap/dist/js/', src:["bootstrap*.js"], dest:'dist/scripts/vendor/bootstrap/4.0.0/'},
		      {expand:true, cwd:'node_modules/bootstrap/dist/css/', src:["bootstrap*.css"], dest:'dist/css/vendor/bootstrap/4.0.0/'},
		      {expand:true, cwd:'node_modules/glyphicons-only-bootstrap/', src:["**"], dest:'dist/css/vendor/bootstrap/4.0.0/glyphicons-only-bootstrap/'},
		      {expand:true, cwd:'node_modules/jquery/dist/', src:["jquery*.js"], dest:'dist/scripts/vendor/jquery/3.3.1/'},
		      {expand:true, cwd:'node_modules/popper.js/dist/umd/', src:["**"], dest:'dist/scripts/vendor/popper/umd/'},
		      {expand:true, cwd:'node_modules/backbone/', src:["**"], dest:'dist/scripts/vendor/backbone/'},
		  	  {expand:true, cwd:'node_modules/underscore/', src:["**"], dest:'dist/scripts/vendor/underscore/'},
		      {expand:true, cwd:'node_modules/requirejs/', src:["**"], dest:'dist/scripts/vendor/requirejs/'},
		      {expand:true, cwd:'node_modules/backbone/', src:["**"], dest:'dist/scripts/vendor/backbone/'},
		  	  {expand:true, cwd:'node_modules/requirejs-text/', src:["**"], dest:'dist/scripts/vendor/requirejs-text/'}
		      ]
		  	}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('default', ['sass']);

}