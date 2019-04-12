# gulp-jekyll

Jekyll + Gulp.js + BrowserSync + PostCSS + Stylelint

## Features

- PostCSS with [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables), [postcss-preset-env](https://github.com/csstools/postcss-preset-env) (includes Autoprefixer), [postcss-nested](https://github.com/postcss/postcss-nested), [CSS MQPacker](https://github.com/hail2u/node-css-mqpacker), and [cssnano](https://github.com/cssnano/cssnano).
- UnCSS for production.
- Jekyll build and rebuild with BrowserSync live reload.
- Browserify or just gulp-concat, as you prefer.
- Optimization (and minification) of images, HTML, CSS, JavaScript, JSON, and XML files.
- Linting with JSHint and Stylelint.
- Extensive Stylelint config, based on my [code-guide](https://github.com/michaelx/code-guide).
- Sourcemap generation.
- Responsive image creation, or image resizing, through either GraphicsMagick or ImageMagick.
- Image sprites.
- Gzip compression.
- Asset file revisions.
- WebP image generation.
- Deployment with rsync or [s3_website](https://github.com/laurilehmijoki/s3_website).

### What’s Coming Next

- User-guide
- Modularizing the default Jekyll theme, to make use of the new 7-1 pattern
- JSON-LD generator

## Prerequisites

> Note: Use [asdf-vm](https://github.com/asdf-vm/asdf) to install and manage versions of Node.js and Ruby. Alternatives like `NVM`, `nodenv`, and `rbenv` can be used as long as there’s a `.nvmrc`, `.ruby-version`, etc. file.

**Node.js**. Currently developed against Node.js `8.11.4`.

**Ruby**. Currently developed against ruby `2.5.3`.

[**Bundler**](https://github.com/bundler/bundler), install with:

```sh
gem install bundler
```

## Installation

Clone the repository and change into the `gulp-jekyll` folder. Run:

```sh
bundle
npm install
npm run bower install
```

## Setup

Open `gulp/config.js` and change settings if needed.

## Usage

Create development build with live-reload:

```sh
npm start
```

Create production build with preview:

```sh
npm run build
```

Deploy latest production build through rsync:

```sh
npm run stage
```

Deploy latest production build on AWS:

```sh
npm run s3:push
```

Dry-run *(preview)* a deployment on AWS:

```sh
npm run s3:dry
```

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