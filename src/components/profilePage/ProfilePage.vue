<template>
  <div :style="{ backgroundColor: bgColor }">
    <h1>{{ $t("profile.title") }}</h1>
    <form @submit.prevent="saveName">
      <label>{{ $t("profile.nameLabel") }}</label>
      <input type="text" v-model="name" />
      <button type="submit">{{ $t("profile.saveButton") }}</button>
    </form>
    <div>
      <label>{{ $t("profile.languageLabel") }}</label>
      <select v-model="language" @change="changeLanguage">
        <option value="en">{{ $t("languages.english") }}</option>
        <option value="fa">{{ $t("languages.farsi") }}</option>
      </select>
    </div>
    <div>
      <label>{{ $t("profile.backgroundColorLabel") }}</label>
      <select v-model="bgColor" @change="changeBgColor">
        <option value="white">{{ $t("colors.white") }}</option>
        <option value="lightgray">{{ $t("colors.lightgray") }}</option>
        <option value="lightblue">{{ $t("colors.lightblue") }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("username") || "",
      language: localStorage.getItem("language") || "en",
      bgColor: localStorage.getItem("bgColor") || "white",
    };
  },
  methods: {
    saveName() {
      localStorage.setItem("username", this.name);
      alert(this.$t("profile.nameSaved"));
    },
    changeLanguage() {
      localStorage.setItem("language", this.language);
      location.reload();
    },
    changeBgColor() {
      localStorage.setItem("bgColor", this.bgColor);
    },
  },
};
</script>

<style>
/* add your own custom styles here */
</style>
