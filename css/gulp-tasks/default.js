let gulp = require('gulp');
let runSequence = require('run-sequence');

gulp.task('default', function () {
	runSequence('styles');
});

gulp.task('svg-sprite', function () {
    runSequence('svg-sprite');
});

gulp.task('watch', function () {
	runSequence('svg-sprite', 'styles', 'watch');
});
