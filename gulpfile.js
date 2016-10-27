// VARIABLES

var gulp                    = require('gulp');
var sass                    = require('gulp-sass');
var sourcemaps              = require('gulp-sourcemaps');
var autoprefixer            = require('gulp-autoprefixer');
var imagemin                = require('gulp-imagemin');
var cssmin                  = require('gulp-cssmin');
var concat                  = require('gulp-concat');
var uglify                  = require('gulp-uglify');
var rename					        = require('gulp-rename');
var babel                   = require('gulp-babel');
var browserSync             = require('browser-sync');
var reload                  = browserSync.reload;


// TASKS

// HTML task
gulp.task('html', function() {
	return gulp.src('src/*.html')
	.pipe(gulp.dest('dist/'))
});

// CSS task
gulp.task('scss', function() {
	return gulp.src(['src/scss/**/*.scss', '!src/scss/_/**/*.scss'])
	.pipe(sass({ style: 'compressed',
		noCache: true}))
	.pipe(autoprefixer())
	.pipe(cssmin())
	.pipe(rename({
        suffix: '.min'
    }))
	.pipe(gulp.dest('dist/css'))
});

// JS task
gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('dist/js/'))
});

// Image task
gulp.task('img', function() {
	return gulp.src('src/assets/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/assets/img/'))
});

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/*.html', ['html']);
	gulp.watch('dist/**/*.html', reload);
	gulp.watch('src/scss/**/*.scss', ['scss', reload]);
	gulp.watch('src/assets/img/**/*', ['img']);
	gulp.watch('src/js/**/*.js', ['js']);
});

// Spin up development server
gulp.task('browser-sync', function() {
	browserSync.init(['dist/css/**/*.css', 'dist/js/**/*.js'], {
		server: {
			baseDir: "dist/"
		}
	});
});

// Default task
gulp.task('default', ['img', 'scss', 'html', 'js', 'watch', 'browser-sync']);
