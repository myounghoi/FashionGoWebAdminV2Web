var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

// style sass
gulp.task('styles', function(){
	return sass('src/assets/scss/**/**/*.scss', {style: 'compact'})
    .on('error', sass.logError)
    .pipe(gulp.dest('src/assets/css/'));
})	
// watch task 
gulp.task('watch', function() {
	//gulp.watch('js/*.js', ['scripts']);
	gulp.watch('src/**/*.scss', ['styles']);
});
	
gulp.task('default', ['styles', 'watch']);