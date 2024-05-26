let gulp = require('gulp');
let gutil = require('gulp-util');
let gulpif = require('gulp-if');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let cmq = require('gulp-group-css-media-queries');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let merge = require('merge-stream');

//style paths
let cssDest = './../../www/css';
let cssDestStatic = './';

gulp.task('styles', function () {
    let sassStream = gulp.src(['*.scss', 'theme/*.scss'])
        .pipe(sass().on('error', sass.logError));

    let otherSettings = merge(sassStream)
        .pipe(gulpif(gutil.env.debug, sourcemaps.init()))
        .pipe(autoprefixer({browsers: ["last 3 versions"]}))
        .pipe(gulpif(gutil.env.debug, sourcemaps.write()))
        .pipe(gulpif(!gutil.env.debug, cmq()))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest))
        .pipe(gulp.dest(cssDestStatic));

    return otherSettings;
});
