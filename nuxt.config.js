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
        content: 'Nuxt boilerplate - bulma flavour'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://use.fontawesome.com/releases/v5.0.0/js/all.js'
    }],
  },




  // mode: 'spa',

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
    middleware: ['closeReadmore', 'closeMenu'],
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
    '~/plugins/lodash-plugin.js',
    //'~/plugins/maps.js',
    '~/plugins/resizer.js',
    //GLOBAL MIXINS
    '~/mixins/computedresizerglobalmixin.js',

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

  // loading: '~/components/loading.vue',

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
      scss: './assets/scss/coloroffset.scss'
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
