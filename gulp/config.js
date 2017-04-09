// Paths
//
// Jekyll wipes out all files on recreation.
// We don’t want to recreate all assets on every Jekyll build
// though. That’s why assets are served from a different
// folder on the development build. BrowserSync watches only
// the asset files.
var src               = 'app';
var build             = 'build';
var development       = build + '/development';
var production        = build + '/production';

// Assets
var srcAssets         = src + '/_assets';
var developmentAssets = build + '/assets';
var productionAssets  = build + '/production/assets';


module.exports = {

  // BrowserSync
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      // Watched files in the dev build. BS reloads
      // website on change.
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ],
      notify: false
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      notify: false
    }
  },

  // Watch source files
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    styles:  srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    sprites: srcAssets + '/images/**/*.png',
    svg:     srcAssets + '/images/**/*.svg',
  },

  // Delete all files from the dev build
  delete: {
    src: [developmentAssets]
  },

  // Jekyll
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml',
      option: '--profile'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },

  // CSS
  styles: {
    src:  srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      precss: {},
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'ie 9',
          'android 4'
        ],
        cascade: true
      },
      mqpacker: { sort: true }
    }
  },

  // Lint CSS files, but none in /vendor/
  lintStyles: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/vendor/**'
    ],
    options: {
      stylelint: {}, // Using .stylelintrc
      reporter: {
        clearReportedMessages: true
      }
    }
  },

  // JavaScript, if Browserify is not used
  scripts: {
    src: [
      srcAssets + '/javascripts/**/*.js'
    ],
    dest: developmentAssets + '/js',
    outputName: 'main.js',
    standaloneFiles: [
      // srcAssets + '/javascripts/example-vendor.js'
    ]
  },

  // JavaScript Modules via Browserify
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below.
    //
    // head.js is loaded in the head of the website, and
    // contains everything that needs to be loaded asap.
    // app.js is loaded at the bottom, and contains
    // everything that can be loaded after rendering.
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/app.js',
      dest:       developmentAssets + '/js',
      outputName: 'app.js'
    }, {
      entries:    './' + srcAssets + '/javascripts/head.js',
      dest:       developmentAssets + '/js',
      outputName: 'head.js'
    }]
  },

  // Lint JavaScript files
  lintJs: {
    src: srcAssets + '/javascripts/*.js'
  },

  // Responsive image generation
  responsiveImages: {
    src:  srcAssets + '/images/example/*.jpg',
    dest: developmentAssets + '/images/example',
    outputSuffix: '-768',
    options: {
      imageMagick: false,
      width : 768,
      quality: 0.85,
      filter: 'Lanczos',
      sharpen: '2x0.5+0.5+0'
    }
  },

  // WebP image generation
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {
      preset: 'photo',
      quality: 90
    }
  },

  // Sprites generation
  // @TODO: Currently not used, might replace with gulp-svgstore!
  sprites: {
    src: srcAssets + '/images/sprites/icon/*.png',
    dest: {
      css: srcAssets + '/styles/base/',
      image: srcAssets + '/images/sprites/'
    },
    options: {
      cssName: '_sprites.css',
      cssFormat: 'css',
      cssOpts: {
        cssClass: function (item) {
          // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
          if (item.name.indexOf('-hover') !== -1) {
            return '.icon-' + item.name.replace('-hover', ':hover');
            // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
          } else {
            return '.icon-' + item.name;
          }
        }
      },
      imgName: 'icon-sprite.png',
      imgPath: '/assets/images/sprites/icon-sprite.png'
    }
  },

  // Base64
  // @NOTE: Not used.
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },

  // Copy images
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },

  // Copy fonts
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  developmentAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },

  // Copy CSS
  // Used to copy production ready styles.
  copycss: {
    src:  developmentAssets + '/css/*.css',
    dest: productionAssets + '/css/'
  },

  // Optimize CSS, JS, Images, HTML for production
  optimize: {
    css: {
      src:  productionAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        uncss: {
          html: [
            production + '/**/*.html'
          ],
          ignore: [
          ]
        }
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    json: {
      src:  production + '/**/*.json',
      dest: production
    },
    xml: {
      src:  production + '/**/*.xml',
      dest: production,
      options: { type: 'minify' }
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/images/',
      imageminPluginOptions: {
        gifsicle: { interlaced: true },
        jpegtran: { progressive: true },
        optipng: { optimizationLevel: 3 },
        svgo: { plugins: [{ removeDesc: true }] }
      },
      imageminOptions: { verbose: false }
    },
    html: {
      development: {
        src: development + '/**/*.html',
        dest: development,
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          minifyJS: true,
          minifyCSS: true,
          processScripts: ['application/ld+json']
        }
      },
      production: {
        src: production + '/**/*.html',
        dest: production,
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          minifyJS: true,
          minifyCSS: true,
          processScripts: ['application/ld+json']
        }
      }
    }
  },

  // Lint production JSON files
  lintJson: {
    src:  production + '/**/*.json'
  },

  // Revision asset files
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js'
        //productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },

  // Replace links to asset files, with rev version
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },

  // GZIP compression
  // @NOTE: Not used, done with s3_website.
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },

  // rsync to staging server
  rsync: {
    src: production + '/**',
    options: {
      destination: '~/path/to/my/website/root/',
      root: production,
      hostname: 'mydomain.com',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }

};
