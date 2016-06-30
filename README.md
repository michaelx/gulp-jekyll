# gulp-jekyll

Jekyll + Gulp.js + BrowserSync + PostCSS

Based on Stefan Imhoff’s wonderful [Gulp.js series](https://github.com/kogakure/gulp-tutorial), adjusted and extended to fit my project preferences.

### Differences

- New CSS organization, based on 7-1 pattern *(see below)*
- Extensive stylelint config, based on my [code-guide](https://github.com/michaelx/code-guide)
- Current Jekyll 3.1.6 and npm packages (tested)
- Removed FontCustom
- Removed some assets (fonts, sprites, icons, vectors)
- Disabled sprites and fonts watch task
- Disabled gzip task, will be covered by s3_website
- Added a few comments here and there for clarity
- JSON-LD instead of Microdata markup for structured data

### What’s Coming Next

- UnCSS task
- Minify json, xml, svg task
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

- Stefan Imhoff’s [Gulp.js series](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)
- [Michael Xander](http://michaelxander.com)