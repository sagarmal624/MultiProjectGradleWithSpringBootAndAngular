'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var minifyHtmlOptions = {
    caseSensitive: true,
    keepClosingSlash: true,
    removeAttributeQuotes: false,
    empty: true,
    spare: true,
    quotes: true
};

gulp.task('bower', function () {
    return bower();
});

gulp.task('partials', function () {
    return gulp.src([
        paths.src + '/{app,components}/**/*.html',
        paths.tmp + '/{app,components}/**/*.html'
    ])
        .pipe($.minifyHtml(minifyHtmlOptions))
        .pipe(gulp.dest(paths.tmp + '/partials/'))
        .pipe(gulp.dest(paths.tmp + '/partials/'));
});

gulp.task('html', ['inject', 'partials'], function () {
    var htmlFilter = $.filter('*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src([paths.tmp + '/partials/*.html',
        paths.tmp + '/partials/**/*.html', paths.tmp + '/serve/*.html'])
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml(minifyHtmlOptions))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe($.size({title: paths.dist + '/', showFiles: true}));
});

gulp.task('images', function () {
    return gulp.src(paths.src + '/assets/images/**/*')
        .pipe(gulp.dest(paths.dist + '/assets/images/'));
});

gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(paths.dist + '/fonts/'));
});

gulp.task('misc', function () {
    return gulp.src(paths.src + '/**/*.ico')
        .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('clean', function (done) {
    $.del([paths.dist + '/', paths.tmp + '/'], done);
});

gulp.task('build', ['bower', 'html', 'images', 'fonts', 'misc']);
