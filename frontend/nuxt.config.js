export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'polling',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/route'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/router'
  ],

  io: {
    server: {
      // @ts-ignore
      cors: {
        credentials: true, // "Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted."
        origin: ['https://nuxt-socket-io.netlify.app', '*'] // Array of whitelisted origin(s)
      }
    },
    sockets: [{
      url: 'http://localhost:5500' // IO server lives here
    }]
  },

  axios: {
    baseURL: 'http://localhost:5500/'
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: false,
          type: false
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          user: { url: '/user', method: 'get' },
          logout: false
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
          main: "#34495e"
        },
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
