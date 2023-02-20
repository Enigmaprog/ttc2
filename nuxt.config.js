export default {
  googleAnalytics: {
    id: "G-G24FZ0SXNX", // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: "G-G24FZ0SXNX",
    },
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Public Cloud TTC",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Транстелеком, ттс, transtelecom, ttc",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity:
          "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
        crossorigin: "anonymous",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
        rel: "stylesheet",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
        integrity:
          "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-analytics",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
  ],
  i18n: {
    /* module options */
    locales: [
      {
        name: "Русский",
        code: "ru",
        file: "ru-RU.js",
      },
      {
        name: "English",
        code: "en",
        file: "en-US.js",
      },
      {
        name: "Казак",
        code: "kk",
        file: "kk-KZ.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ru",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
