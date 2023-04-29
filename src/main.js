import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const app = createApp(App);
const messages = {
  en: {
    buttons: {
      login: "Login",
      logout: "Logout",
    },
    tabs: {
      dashboard: "Dashboard",
      todos: "Todos",
      weather: "Weather",
      profile: "Profile",
    },
    profile: {
      title: "Profile",
      nameLabel: "Name",
      saveButton: "Save",
      nameSaved: "Name saved successfully!",
      languageLabel: "Language",
      backgroundColorLabel: "Background Color",
    },
    languages: {
      english: "English",
      farsi: "Farsi",
    },
    colors: {
      white: "White",
      lightgray: "Light Gray",
      lightblue: "Light Blue",
    },
  },
  fa: {
    buttons: {
      login: "ورود",
      logout: "خروج",
    },
    tabs: {
      dashboard: "داشبورد",
      todos: "لیست کارها",
      weather: "آب و هوا",
      profile: "پروفایل",
    },
    profile: {
      title: "پروفایل",
      nameLabel: "نام",
      saveButton: "ذخیره",
      nameSaved: "نام با موفقیت ذخیره شد!",
      languageLabel: "زبان",
      backgroundColorLabel: "رنگ پس‌زمینه",
    },
    languages: {
      english: "انگلیسی",
      farsi: "فارسی",
    },
    colors: {
      white: "سفید",
      lightgray: "خاکستری روشن",
      lightblue: "آبی روشن",
    },
  },
};
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
