import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
  ** Nuxt.js modules
  */
  plugins: [
    "~/plugins/axios",
    "~/plugins/compositionApi",
    "~/plugins/common.js"
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  router: {
    middleware: ["auth"]
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/v1/users/get-token",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/api/v1/users/detail/me/",
            method: "get",
            propertyName: false
          },
          logout: false
        },
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: "/account/login/",
      logout: "/account/login/",
      callback: "/account/login/",
      home: "/"
    },
    rewriteRedirects: false,
    fullPathRedirect: false,
    localStorage: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
