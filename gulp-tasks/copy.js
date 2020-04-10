"use strict";

import gulp from "gulp";

gulp.task("copy", () => {
    return gulp.src([
        "./src/views/favicon.ico",
        "./src/views/manifest.json",
        "./src/views/resume.pdf"])
        .pipe(gulp.dest("./dist/"));
});