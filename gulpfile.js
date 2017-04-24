var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');

var sass = require('gulp-sass');
var autopref = require('gulp-autoprefixer');
var minifiCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('imagine', function(){
  gulp.src('src/app/images/*')
      .pipe(imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 8,
          svgoPlugins: [{removeViewBox: true}]
      }))
      .pipe(gulp.dest('src/img'))
})

gulp.task('style', function(){
  gulp.src('src/app/scss/main.scss')
  .pipe(sass())
  .pipe(autopref())
  .pipe(minifiCss())
  .pipe(gulp.dest('src/css'));
});

gulp.task('clean', function (cb) {
  return del(['src/build/**/*'], cb);
});

gulp.task('cleanImg', function (cb) {
  return del(['src/img/**/*'], cb);
});

gulp.task('makeStyle',['cleanImg'], function(cb){
  gulp.run('imagine');
});

gulp.task('usemin', function () {
  return gulp.src('src/app/*.html')
  .pipe(usemin({
    html: [minifyHtml({
      empty: true,
      conditionals: true
    })],
    js:['concat', rev()]
  }))
  .pipe(gulp.dest('src/build'));
});

gulp.task('build',['clean'], function () {
  gulp.run('usemin');
});

gulp.task('watcher', function () {
  gulp.watch(['src/app/**/*.js', 'src/app/*.html'], ['build']);
  gulp.watch(['src/app/scss/**/*.scss'], ['style']);
});

gulp.task('default', function(){
  gulp.run('build','makeStyle','style', 'watcher');
});
