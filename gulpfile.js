const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function styles () {
  return gulp.src('./src/*.css')
  
            .pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
              }))
                           
            .pipe(cleanCSS({level: 2}))
  
            .pipe(gulp.dest('./build'));
}

gulp.task('styles', styles);