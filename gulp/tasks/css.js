import rename from "gulp-rename";
import concat from "gulp-concat";
import autoPrefixer from "gulp-autoprefixer";
export function css() {
  return app.gulp
    .src(app.path.src.css)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "CSS",
          message: "Error:<%=error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(
      autoPrefixer({
        grid: true,
        overrideBrowserList: ["last 3 versions"],
        cascade: true,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}
