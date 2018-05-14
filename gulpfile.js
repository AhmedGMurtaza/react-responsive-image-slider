const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compile-sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public'));
});

gulp.task('watch-sass', function () {
    gulp.watch('src/sass/*.scss', ['compile-sass']);
})

gulp.task('default', ['watch-sass'])