var gulp = require("gulp"),
    argv = require("yargs").argv,
    browserSync = require("browser-sync").create(),
    $ = require("gulp-load-plugins")({
        lazy: true
    });

if(!argv.folder) {
    console.error("Podaj folder!");
    return process.exit(1);
}

gulp.task("server", function() {

    browserSync.init({
        server: {
            baseDir: "src/" + argv.folder
        },
        open: false
    });

});

gulp.task("watch", function() {

    gulp.watch(["src/**/*.css"], function() {
        gulp.src("src/" + argv.folder + "/css/style.css")
            .pipe( browserSync.stream() );
    });

    gulp.watch(["src/**/*.html", "src/**/*.js"], function() {
        browserSync.reload();
    });

});

gulp.task("default", ["server", "watch"]);