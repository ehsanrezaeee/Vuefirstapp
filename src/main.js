import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { messages } from "./I18n";

const app = createApp(App);

const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages,
});

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(i18n);
app.mount("#app");
