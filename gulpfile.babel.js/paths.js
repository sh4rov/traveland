export const src = './src'
export const dist = './dist'

module.exports = {
  styles: {
    main: src + '/styles/**/main.scss',
    src:  src + '/styles/**/*.scss',
    dist: dist + '/css'
  },

  views: {
    src: src + '/**/[^_]*.html',
    dist: dist
  },

  scripts: {
    src: [
      src + '/js/**/*.js',
      src + '/components/**/*.js',
      src + '/modules/**/*.js',
    ],
    dist: dist + '/js'
  },

  watch: {
    css: dist + '/styles/**/*.css',
    scss: src + '/**/*.scss',
    html: src + '/**/*.html',
    js: [
      src + '/components/**/*.js',
      src + '/modules/**/*.js',
    ],
    img: src + '/img/**/*.{jpg,png,gif,webp,svg}',
    video: src + '/video/**/*.mp4',
  },

  fonts: {
    src: src + '/fonts/**/*.{ttf,woff,woff2}',
    dist: dist + '/fonts',
  },

  images: {
    src: src + '/img/**/*.{jpg,svg,png,webp,gif,mp4}',
    favicons: src + '/img/favicons/*.png',
    dist: dist + '/img'
  },

  video: {
    src: src + '/video/**/*.mp4',
    dist: dist + '/video/'
  }
}