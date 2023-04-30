<template>
  <div class="container" :style="{ backgroundColor: bgColor }">
    <!-- <h1 class="title">{{ $t("profile.title") }}</h1> -->
    <form @submit.prevent="saveName">
      <div class="form-group">
        <label for="name">{{ $t("profile.nameLabel") }}</label>
        <input type="text" id="name" v-model="name" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">
        {{ $t("profile.saveButton") }}
      </button>
    </form>
    <div class="form-group">
      <label for="language">{{ $t("profile.languageLabel") }}</label>
      <select
        id="language"
        v-model="language"
        @change="changeLanguage"
        class="form-control"
      >
        <option value="en">{{ $t("languages.english") }}</option>
        <option value="fa">{{ $t("languages.farsi") }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="bgColor">{{ $t("profile.backgroundColorLabel") }}</label>
      <select
        id="bgColor"
        v-model="bgColor"
        @change="changeBgColor"
        class="form-control"
      >
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

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 32px;
  margin-top: 0;
}

.form-group {
  margin-bottom: 20px;
}

label {
  margin: 1rem;
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

.form-control {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}

.btn-primary {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

select {
  width: 100%;
}

option {
  padding: 5px;
  font-size: 16px;
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
