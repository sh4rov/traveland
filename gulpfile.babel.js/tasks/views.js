import { src, dest, lastRun } from 'gulp'
import fileinclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'
import strip from 'gulp-strip-comments'
import paths from '../paths'

const views = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(debug(src))
    .pipe(strip())
    .pipe(fileinclude({
      prefix: '@@',
    }))
    .pipe(dest(paths.views.dist))
}

module.exports = views;