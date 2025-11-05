// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "vuetify/lib/styles/main.sass",
    "~/assets/style/style.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "light",
      },
    },
  },
  build: {
    transpile: ["vuetify", "@vee-validate/rules"],
  },
  // hooks: {
  //   'vite:extendConfig': config => {
  //     config.plugins.push(
  //       vuetify({
  //         styles: { configFile: resolve('./settings.scss') },
  //       })
  //     )
  //   },
  // },
  modules: ["@pinia/nuxt", "@vee-validate/nuxt"],
  veeValidate: { autoImports: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/style/tools/_index.scss" as *;@use "@/assets/style/abstracts/_index.scss" as *;@import "@/assets/style/base/_color.scss";',
        },
      },
    },
  },
  plugins: [
    "~/plugins/vee-validate/vee-validate.js",
    "~/plugins/vuetify/vuetify.js",
    "~/plugins/aos/aos.js",
  ],
});
