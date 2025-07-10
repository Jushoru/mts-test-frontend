// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/strapi', '@nuxt/image', 'nuxt-toast'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337/api'
  }
})