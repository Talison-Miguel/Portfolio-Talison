'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp.src('./sass/style.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
};

function server() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('./sass/**/*.sass', buildStyles);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.series(buildStyles, server));