let gulp = require('gulp');
let plumber = require('gulp-plumber');
let errorHandler = require('gulp-plumber-error-handler');
let svgSprite = require("gulp-svg-sprites");

gulp.task('svg-sprite', function () {
    return gulp.src('./../img/svg-sprite/*.svg')
        .pipe(plumber({errorHandler: errorHandler('Error in \'svg-sprite\' task')}))
        .pipe(svgSprite({
            mode: "sprite",
            preview: false,
            padding: 3,
            common: "icon-svg",
            selector: "icon-svg-%f",
            cssFile: "svg-sprite/sprite-svg.css",
            svgPath: "../../img/sprite-svg.svg",
            svg: {
                sprite: "../img/sprite-svg.svg"
            }
        }))
        .pipe(gulp.dest("./"));
});
