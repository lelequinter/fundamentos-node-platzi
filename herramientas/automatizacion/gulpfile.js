const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build',function( cb ){
    console.log('Construyendo el sitio');
    setTimeout(() => {
        cb();
    }, 1000);
    cb();
});

gulp.task('serve', function(){
    console.log('>> Server');
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

gulp.task('default', gulp.series('build', 'serve'));