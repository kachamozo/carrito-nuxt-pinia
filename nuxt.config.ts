// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-quasar-ui", "@pinia/nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
});
