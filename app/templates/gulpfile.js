var gulp      = require('gulp');
var gutil     = require('gulp-util');
var webpack   = require('webpack');
var connect	  = require('gulp-connect');

var paths = {
	webpack: [
		'./app/modules/**/*.js',
		'./app/services/**/*.js',
		'./app/app.js'
	]
};

var devCompiler = webpack( require('./webpack.config.js') );

gulp.task('webpack:dev', function(callback) {
	// Run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('default', ['serve', 'watch']);

gulp.task('watch', function() {
	gulp.watch(paths.webpack, ['webpack:dev']);
});

gulp.task('serve', function() {
	connect.server({
		port: 8000
	});
});