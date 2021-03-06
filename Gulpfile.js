var gulp = require("gulp");
var pump = require("pump");
var $ = require("gulp-load-plugins")({ lazy: true });

gulp.task("default", function(cb) {
  pump([
    gulp.src("./src/angular-decimal-precision.js"),
    $.uglify(),
    $.ngAnnotate({ add: true }),
    $.rename({ suffix: ".min" }),
    gulp.dest("./dist")
  ]);
});
