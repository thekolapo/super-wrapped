// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  css: ["@/assets/scss/main.scss"], // Add global SCSS file

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/core/variables.scss";`, // Auto-import variables
        },
      },
    },
  },

  app: {
    head: {
      title: "Super",
      meta: [
        {
          name: "description",
          content: "",
        },
        { property: "og:title", content: "Super" },
        {
          property: "og:description",
          content: "",
        },
        {
          property: "og:image",
          content: "",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Super" },
        {
          name: "twitter:description",
          content: "",
        },
        {
          name: "twitter:image",
          content: "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    public: {},
  },
  nitro: {
    preset: "netlify",
  },
});
