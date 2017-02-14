'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify'); // Bundles JS
var babelify = require('babelify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var less = require('gulp-less');
var path = require('path');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		less: './src/less/**/*.less',
		css: [
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
		'./src/css/*.css'
		],
		dist: './dist'
	}
};

gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify({entries: './src/main.js', extensions: ['.js'], debug: true})
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('font-awesome', function() {
    gulp.src('./src/font-awesome/**/*')
        .pipe(gulp.dest(config.paths.dist + '/font-awesome'));
});

gulp.task('less', function() {
  return gulp.src(config.paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));

    //publish favicon
    gulp.src('./src/favicons/*')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({configFile: '.eslintrc.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.less, ['less', 'css']);
	gulp.watch(config.paths.css, ['css']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('build', ['html', 'js', 'less', 'css', 'images', 'font-awesome', 'fonts']);

gulp.task('default', ['html', 'js', 'fonts', 'less', 'css', 'images', 'lint', 'open', 'watch']);