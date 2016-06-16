# gulp-jekyll

Jekyll + Gulp.js + BrowserSync + PostCSS

Based on Stefan Imhoff’s wonderful [Gulp.js series](https://github.com/kogakure/gulp-tutorial), adjusted to fit my project preferences.

### Differences

- Removed FontCustom
- Current Jekyll 3.1.6
- Removed some assets (fonts, sprites, icons, vectors)
- Disabled sprites and fonts watch task
- Disabled gzip task, will be covered by s3_website
- Added a few comments here and there for clarity

### What’s Coming Next

- UnCSS task
- Minify json, xml, svg task
- s3 preview task
- s3 publish task

## Installation

Clone the repository on your computer and change into the projects folder. Run:

```sh
$ bundle
$ bower install
$ npm install
```

**Hint**: If you get errors while installing `gulp-imagemin` it may help to execute this command before running `npm install`:

```sh
export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
```

**Hint**: I recently ran into problem with `gulp-imagemin`. This may be an error with my current version of node. But if you get the same error on `gulp publish`, while optimizing images install manually these files:

```sh
$ npm install optipng-bin
$ npm install cwebp-bin
```

## Setup

Open `gulp/config.js` and change settings if needed. Only the `rsync` settings need to be adjusted. Change the `destination` to a path on your webserver and change `hostname` and `username`.

## Running Gulp.js

Three tasks are available:

```sh
$ gulp
$ gulp publish
$ gulp deploy
```

- Running `gulp` will start a development server, build assets and the Jekyll site and start a `watch` task.
- Running `gulp publish` will copy and optimize assets and run a production build of Jekyll.
- Running `gulp deploy` will copy the generated files with Rsync to your server.

## Credits

- Stefan Imhoff’s [Gulp.js series](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)
- [Michael Xander](http://michaelxander.com)