//Подключаем модуль галпа
const {src, dest, watch} = require('gulp');
// Подкдючаем модуль mini-css
const min = require('gulp-mini-css');
const minCSS =require('gulp-clean-css');
const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

// Static server
 
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    watch("src/*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;

