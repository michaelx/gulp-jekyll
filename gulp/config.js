// Jekyll wipes out all files on recreation.
// We don’t want to recreate all assets on every Jekyll build though.
// That’s why assets are served from a different folder on the development build.
// BrowserSync watches only the asset files.

var src               = 'app';
var build             = 'build';
var development       = 'build/development'; // holds the files created by Jekyll
var production        = 'build/production';
var srcAssets         = 'app/_assets'; // links to source maps
var developmentAssets = 'build/assets'; // holds the assets for the dev build
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
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
  delete: {
    src: [developmentAssets]
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },
  styles: {
    src:  srcAssets + '/styles/*.css',
    dest: developmentAssets + '/css',
    options: {
      precss: {},
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ],
        cascade: true
      },
      mqpacker: {}
    }
  },
  lintStyles: {
    src: [
      srcAssets + '/styles/**/*.css',
      '!' + srcAssets + '/styles/vendor/**'
    ],
    options: {
      stylelint: {}, // Using .stylelintrc
      reporter: {
        clearMessages: true
      }
    }
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js'
    }, {
      entries:    './' + srcAssets + '/javascripts/head.js',
      dest:       developmentAssets + '/js',
      outputName: 'head.js'
    }]
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {
      preset: 'photo',
      quality: 90
    }
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },
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
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
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
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    }
  },
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
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
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
