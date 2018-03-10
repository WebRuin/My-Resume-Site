const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
});

//Watch task
gulp.task('default', () => {
    gulp.watch('sass/**/*.scss',['styles']);
});