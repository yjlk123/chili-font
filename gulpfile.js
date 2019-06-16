var svgscaler = require('svg-scaler');
var gulp = require('gulp');

gulp.task('default', function(cb){
    var stream = gulp.src('icons/*.svg')
        .pipe(svgscaler({ width: 16 })) // options
        .pipe(gulp.dest('./build/icons'))
    return stream
});
