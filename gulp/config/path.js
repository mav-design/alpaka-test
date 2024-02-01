import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    img: `${buildFolder}/css/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    css: `${srcFolder}/css/**/*.css`,
    img: `${srcFolder}/img/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    css: `${srcFolder}/**/*.css`,
    files: `${srcFolder}/files/**/*.*`,
    img: `${srcFolder}/img/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};
