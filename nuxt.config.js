export default {
  server: {
    host: '0' // default: localhost
  },

  static: {
    prefix: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ProGeoSurvey',
    titleTemplate: '%s | ProGeoSurvey - Geodezja',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800;900&display=swap', crossorigin: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/iconsHandler.js',
    '~/plugins/vue-awesome-swiper.js',
    { src: '~/plugins/googleMaps.js', ssr: true }
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
   // '@nuxt/image',
    ['nuxt-lazy-load',{
      defaultImage: '/images/placeholder.svg'
    }]
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/api/auth/login', method: 'post', propertyName: 'token'}
        }
      }
    }
    // Options
  },
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
