module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Tussentuin',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Tussentuin - website'
      },
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      },

      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png'
      },

      {
        name: 'msapplication-square70x70logo',
        content: '/mstile-70x70.png'
      },

      {
        name: 'msapplication-square150x150logo',
        content: '/"mstile-150x150.png'
      },


      {
        name: 'msapplicationn-wide310x150logo',
        content: '/mstile-310x150.png'
      },

      {
        name: 'msapplication-square310x310logo',
        content: '/mstile-310x310.png'
      }
    ],
    link: [{
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/apple-touch-icon-57x57.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/apple-touch-icon-114x114.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/apple-touch-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/apple-touch-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/apple-touch-icon-60x60.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/apple-touch-icon-120x120.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: '/apple-touch-icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: '/favicon-196x196.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '128x128',
        href: '/favicon-128.png'
      }],
    script: [{
      src: 'redirect.js'
    },{
      src: 'polyfill.min.js'
    }]
  },


  mode: 'spa',


  // loadingIndicator: {
  //   name: 'circle',
  //   color: 'white',
  //   background: '#00237d'
  // },

  loadingIndicator: '~/assets/initloaderspa.html',

  css: [
    '~assets/css/marginpaddinghelpers.css',
    '~assets/css/sizehelpers.css',
    '~assets/css/animationhelpers.css',
    '~assets/css/aligner.css',
    '~assets/bulmaCustom/custom/custom.css',
    // '~assets/fonts/okomito/stylesheet.css',
    // '~assets/fonts/NeueEinstellung/stylesheet.css',
    '~assets/fonts/Nova/stylesheet.css',
    //'~assets/main.css',
    //'~assets/font-awesome-4.7.0/css/font-awesome.min.css',
    // 'swiper/dist/css/swiper.css',
    //'~assets/swiper.css',

  ],


  router: {
    middleware: ['closeReadmore', 'closeMenu','login'],
    scrollBehavior: function(to, from, savedPosition) {
      if (to.path === '/about' && from.path === '/about') {

      } else {

        if (savedPosition) {
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 10)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 50)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 100)
          // return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
    }

  },

  modules: [
    //'@nuxtjs/bulma'
  ],

  plugins: [
    //'~/plugins/maps.js',
    // '~/plugins/resizer.js',
    //GLOBAL MIXINS
    // '~/mixins/computedresizerglobalmixin.js',
    {
      src: '~/plugins/vueswipe.js',
      ssr: false
    },
    {
      src: '~/plugins/nuxt-client-init.js',
      ssr: false
    },
    {
      src: '~/plugins/vuemq.js',
      ssr: false
    },
    {
      src: '~/plugins/lodash-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/initialLoad.js',
      ssr: false
    },

    {
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/documentoffset.js',
      ssr: false
    },
    {
      src: '~/plugins/smoothscroll.js',
      ssr: false
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false
    },
    {
      src: '~/plugins/inview.js',
      ssr: false
    },
    {
      src: '~/plugins/inview.js',
      ssr: false
    },
    {
      src: '~/plugins/scrollMonitor.js',
      ssr: false
    },
    {
      src: '~/plugins/rellax.js',
      ssr: false
    }
    // {
    //   src: '~/mixins/computedscrollbarwidth.js',
    //   ssr: false
    // },
  ],

  /*
   ** Customize the progress bar color
   */
  // loading: {
  //   color: '#091540'
  // },

  loading: '~/components/loading.vue',

  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'lodash', 'rellax', 'scrollmonitor'],

    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    styleResources: {
      scss: './assets/scss/variables.scss',
      scss: './assets/scss/coloroffset.scss',
      scss: './assets/scss/main.scss',
      // scss: './assets/scss/underlines.scss'
    }

    /*
     ** Run ESLint on save
     */
    // extend(config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  }

}
