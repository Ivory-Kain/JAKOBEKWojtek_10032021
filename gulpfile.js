const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const {
    series
} = require('gulp');
function unusedcss(){
    return gulp.src(['source_css/**/*.css', '!source_css/css/bootstrap.css'] )
    .pipe(purgecss({
        content: ['**/*.html']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'))
}

function bootstrap() {
    return gulp.src('source_css/css/bootstrap.css')
    
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'))
}
function watch() {
    gulp.watch('source_css/**/*.css', series (unusedcss,bootstrap));
}
;

  exports.watch = watch;