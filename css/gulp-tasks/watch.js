let gulp = require('gulp');
let runSequence = require('run-sequence');
let watch = require('gulp-watch');

gulp.task('watch', function () {
	global.watch = true;

    gulp.watch(['**/*.scss'], function () {
        runSequence('styles');
    });

    gulp.watch(['./../../img/svg-sprite/*.svg'], function () {
        runSequence('svg-sprite');
    });
});
