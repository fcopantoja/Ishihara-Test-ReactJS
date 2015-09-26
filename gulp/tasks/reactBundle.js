var gulp = require('gulp');
var bundle = require('gulp-react-bundle');
var markup = require('../config').markup;

gulp.task('react-bundle', function() {
  bundle( './src/app/app3.jsx', markup.dest + '/app2.js');
});