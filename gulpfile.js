var gulp = require('gulp'),
	concat = require('gulp-concat'),
    image = require('gulp-imagemin'),
    sass = require('gulp-ruby-sass'),
    ugly = require('gulp-uglify');

gulp.task('imagemin', () => {
    gulp.src('src/images/**/*')
        .pipe(image())
        .pipe(gulp.dest('build/images'))
});

gulp.task('sass', () => {
    sass('src/stylesheets/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('build/stylesheets/'));
});

gulp.task('build-js', () => {
	return gulp.src('src/scripts/**/*.js')
		.pipe(concat('main.js'))
		.pipe(ugly())
		.pipe(gulp.dest('build/scripts'));
});

gulp.watch('src/stylesheets/style.scss', ['sass']);
gulp.watch('src/images/*', ['imagemin']);
gulp.watch('src/scripts/**/*', ['build-js'])


gulp.task('default', ['sass', 'imagemin', 'build-js']);