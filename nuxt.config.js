export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ahmad Ridwan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website to shares happiness, knowledge and some love'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Ahmad Ridwan'
      },
      {
        property: 'og:site_name',
        content: 'Ahmad Ridwan'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ahmadridwan.netlify.app'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ahmad Ridwan'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Personal website to shares happiness, knowledge and some love.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logo.png'
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      { name: 'twitter:site', content: '@ahmadrdwann' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://ahmadridwan.netlify.app'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Ahmad Ridwan'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Personal website to shares happiness, knowledge and some love'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/logo.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon/favicon.ico' },
      {
        hid: 'shortcut-icon',
        rel: 'shortcut icon',
        href: '/icon/favicon-32x32.png'
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        href: '/icon/apple-touch-icon.png'
      },
      {
        rel: 'manifest',
        hid: 'manifest',
        href: '/icon/site.webmanifest.json'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/aos'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image'
  ],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/pujakesuma/image/upload/v1642987985/'
    },
    presets: {
      custom: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '80'
        }
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loadingIndicator: {
    name: 'cube-grid',
    color: '#7F1D1D',
    background: '#fff'
  }
};
