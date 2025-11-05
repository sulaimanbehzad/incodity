import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myTheme = {
  dark: false,
  colors: {
    primary: "#121212",
  },
}


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myTheme',
      themes: {
        myTheme,
      },
    },
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
