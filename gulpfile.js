import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { css } from "./gulp/tasks/css.js";
import { server } from "./gulp/tasks/server.js";
import { img } from "./gulp/tasks/img.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.css, css);
  gulp.watch(path.watch.img, img);
}
//обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);
//основные задачи
const mainTasks = gulp.parallel(fonts, gulp.parallel(copy, html, css, img));
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
gulp.task("default", dev);
