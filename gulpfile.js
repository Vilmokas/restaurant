'user strict';

const { gulp, watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/Assets/scss/**/*.scss';
const SCSS_DEST = './src/Assets/css';

function compile_scss(cb) {
    src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(dest(SCSS_DEST));
    cb();
}

function defaultTask(cb) {
    watch(SCSS_SRC, compile_scss);
    cb();
}

exports.default = defaultTask