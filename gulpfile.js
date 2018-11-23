"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var rename = require ("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var ccso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(ccso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("images", function () {
return gulp.src("source/img/**/*.{png,jpg,svg}")
.pipe(imagemin([
imagemin.optipng({optimizationLevel: 3}),
imagemin.jpegtran({progressive: true}),
imagemin.svgo({
plugins: [
    {cleanupIDs: false},
    {removeUselessDefs: false},
    {removeViewBox: true},
]
})
]))
.pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
 .pipe(webp({quality: 90}))
 .pipe(gulp.dest("build/img"));
});

gulp.task("copy", function () {
 return gulp.src([
  "source/fonts/**/*.{woff,woff2}",
  "source/js/**",
  "source/*.html"
  ],
  {
  base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", gulp.series("clean","copy","css","webp","images"));
gulp.task("start", gulp.series("build","server"));
