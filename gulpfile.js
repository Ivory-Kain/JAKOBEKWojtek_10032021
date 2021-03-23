const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');

function unusedcss(){
    return gulp.src('source_css/**/*.css')
    .pipe(purgecss({
        content: ['**/*.html']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'))
}
function watch() {
    gulp.watch('source_css/**/*.css', unusedcss);
};

  exports.unusedcss=unusedcss
  exports.watch = watch;