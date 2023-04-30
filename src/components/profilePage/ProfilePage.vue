<template>
  <div :style="{ backgroundColor: bgColor }">
    <!-- <h1>{{ $t("profile.title") }}</h1> -->
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
      localStorage.setItem("dir", this.dir);
      this.$i18n.locale = this.language;
      this.$emit("dir-changed", this.dir);
    },
    changeBgColor() {
      localStorage.setItem("bgColor", this.bgColor);
      this.$emit("bg-color-changed", this.bgColor);
    },
  },
  computed: {
    dir() {
      return this.language === "fa" ? "rtl" : "ltr";
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 32px;
  margin-top: 0;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

input[type="text"],
select {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

select {
  width: 200px;
}

option {
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
}

option:hover {
  background-color: #eee;
}

.bg-white {
  background-color: white;
}

.bg-lightgray {
  background-color: lightgray;
}

.bg-lightblue {
  background-color: lightblue;
}
</style>
