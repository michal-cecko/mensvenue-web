import colors from 'vuetify/es5/util/colors'
let development = process.env.NODE_ENV !== 'production'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Men's Venue",
    htmlAttrs: {
      lang: 'sk',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Barber & Shop • Krásno Nad Kysucou • Pánske kaderníctvo a holičstvo • Náš cieľ je tvoriť obraz moderného barberingu v spojení s vizuálom osobnosti. O štýl a výsledok priamo pre Vás sa postará skúsený personál školený skvelými edukátormi z domova i zo zahraničia.',
      },
      {
        name: 'keywords',
        content:
          "Mensvenue, Mens Venue, Men's Venue, Tomáš Fonš, Tomáš Fonš mensvenue, Tomas Fons, Pánske kaderníctvo, Pánske holičstvo, Pánsky kaderník, Pánsky holič, Úprava brady, Krásno nad Kysucou, Krasno barber, krasno, pánsky strih krasno, barbershop, barbershop krasno, kadernictvo krasno, kadernik krasno, kadernictvo krasno nad kysucou, kadernik krasno nad kysucou",
      },
      { name: 'author', content: 'Synapps.sk' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/VueFlickity.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  axios: {
    baseURL: development ? 'http://localhost:3000/' : 'https://mensvenue.sk/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },
}
