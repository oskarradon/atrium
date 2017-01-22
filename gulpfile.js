// VARIABLES

const gulp                    = require('gulp');
const sass                    = require('gulp-sass');
const sourcemaps              = require('gulp-sourcemaps');
const autoprefixer            = require('gulp-autoprefixer');
const imagemin                = require('gulp-imagemin');
const fontmin                 = require('gulp-fontmin');
// const cssmin                  = require('gulp-cssmin');
const concat                  = require('gulp-concat');
const uglify                  = require('gulp-uglify');
const rename					        = require('gulp-rename');
const babel                   = require('gulp-babel');
const browserSync             = require('browser-sync');
const reload                  = browserSync.reload;


// TASKS

// HTML task
// gulp.task('html', function() {
// 	return gulp.src('src/*.html')
// 	.pipe(gulp.dest('dist/'))
// });

// CSS task
// gulp.task('scss', function() {
// 	return gulp.src(['src/scss/**/*.scss', '!src/scss/_/**/*.scss'])
// 	.pipe(sass({ style: 'compressed',
// 		noCache: true}))
// 	.pipe(autoprefixer())
// 	.pipe(cssmin())
// 	.pipe(rename({
//     suffix: '.min'
//   }))
// 	.pipe(gulp.dest('dist/css'))
// });

// JS task
// gulp.task('js', function() {
// 	return gulp.src('src/js/**/*.js')
// 	.pipe(babel({
// 		presets: ['es2015']
// 	}))
// 	.pipe(uglify())
// 	.pipe(rename({
// 		suffix: '.min'
// 	}))
// 	.pipe(gulp.dest('dist/js/'))
// });

// Image task
// gulp.task('img', function() {
// 	return gulp.src('src/assets/img/**/*')
// 	.pipe(imagemin())
// 	.pipe(gulp.dest('dist/assets/img/'))
// });

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('/*.html', reload);
	gulp.watch('css/**/*.scss', reload);
	gulp.watch('assets/**/*', reload);
	gulp.watch('js/**/*.js', reload);
});

// Spin up development server
gulp.task('browser-sync', function() {
	browserSync.init(['css/**/*.css', 'js/**/*.js'], {
		server: {
			// baseDir: "/"
		}
	});
});

// Default task
// gulp.task('default', ['img', 'scss', 'html', 'js', 'watch', 'browser-sync']);
gulp.task('default', ['watch', 'browser-sync']);
