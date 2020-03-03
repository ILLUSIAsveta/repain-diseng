//Подключаем модуль галпа
const gulp = require('gulp');
// Подкдючаем модуль mini-css
const min = require('gulp-mini-css');
const minCSS =require('gulp-clean-css');

const  browserSync = require('browser-sync').create();


gulp.task ('hello', function(done){
    console.log ('Привет мир!');
    done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('min', function(){
    return gulp.src('src/css/*.css')
    .pipe(minCSS())
    .pipe(min({ext:'-min.css'}))
    .pipe(gulp.dest('dist/css'));
});


