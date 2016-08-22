# gulp-jekyll

Jekyll + Gulp.js + BrowserSync + PostCSS + Stylelint

## Features

- PostCSS with PreCSS, Autoprefixer, CSS MQPacker, cssnano, and of course sourcemaps for development.
- UnCSS for production.
- Jekyll build and rebuild with BrowserSync.
- Browserify or just gulp-concat, as you prefer.
- Optimization (and minification) of images, HTML, CSS, JavaScript, JSON, and XML files.
- Linting with JSHint and Stylelint.
- Extensive Stylelint config, based on my [code-guide](https://github.com/michaelx/code-guide).
- Responsive image creation, or image resizing, through either GraphicsMagick or ImageMagick.
- Image sprites.
- Gzip compression.
- Asset file revisions.
- WebP image generation.
- Deployment with rsync or [s3_website](https://github.com/laurilehmijoki/s3_website).

### What’s Coming Next

- User-guide
- Modularizing the default Jekyll theme, to make use of the new 7-1 pattern
- s3 preview task
- s3 publish task
- JSON-LD generator

## Installation

Clone the repository on your computer and change into the projects folder. Run:

```sh
$ bundle
$ bower install
$ npm install
```

## Setup

Open `gulp/config.js` and change settings if needed.

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

## CSS File Organization

gulp-jekyll uses a 5-1 pattern, which is abstracted from the [7-1 pattern](https://sass-guidelin.es/#architecture). 5 folders, 1 file to compile them all in a single CSS file.

```bash
styles/
|
|- utilities/            # Configuration and helpers
|   |- _variables.css    # Global variables
|   |- _functions.css
|   |- _mixins.css
|   …
|
|- vendor/               # Third-party CSS
|   |- _normalize.css
|   …
|
|- base/                 # Boilerplate code
|   |- _reset.css
|   |- _base.css
|   |- _typography.css
|   …
|
|- layout/               # Global wireframe (macro)
|   |- _header.css
|   |- _navigation.css
|   |- _sidebar.css
|   |- _footer.css
|   …
|
|- components/           # Modules (micro)
|   |- _buttons.css
|   |- _cards.css
|   |- _tables.css
|   …
|
`- main.css              # Main file to import everything
```

---

## Credits

- gulp-jekyll started out as a fork of Stefan Imhoff’s wonderful [Gulp.js series](https://github.com/kogakure/gulp-tutorial).
- [Michael Xander](http://michaelxander.com)