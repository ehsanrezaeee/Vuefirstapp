<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ welcomeMessage }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="quote">{{ quote }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>{{ currentTime }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      welcomeMessage: "",
      currentTime: "",
      quote: "",
    };
  },
  mounted() {
    const username = localStorage.getItem("username");
    if (username) {
      this.welcomeMessage = `Welcome , ${username}!`;
    }

    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        this.quote = response.data.content + " - " + response.data.author;
      })
      .catch((error) => {
        console.log(error);
      });
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>
