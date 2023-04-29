<template>
  <div class="wrapper" :style="{ backgroundColor: bgColor }">
    <nav>
      <ul>
        <li
          @click="activeTab = 'Dashboard'"
          :class="{ active: activeTab === 'Dashboard' }"
        >
          {{ $t("tabs.dashboard") }}
        </li>
        <li
          @click="activeTab = 'Todos'"
          :class="{ active: activeTab === 'Todos' }"
        >
          {{ $t("tabs.todos") }}
        </li>
        <li
          @click="activeTab = 'Weather'"
          :class="{ active: activeTab === 'Weather' }"
        >
          {{ $t("tabs.weather") }}
        </li>
        <li
          @click="activeTab = 'Profile'"
          :class="{ active: activeTab === 'Profile' }"
        >
          {{ $t("tabs.profile") }}
        </li>
      </ul>
    </nav>

    <div class="content">
      <div v-if="activeTab === 'Dashboard'">
        <h1>{{ welcomeMessage }}</h1>
        <div class="quote">{{ quote }}</div>
        <h2>{{ currentTime }}</h2>
      </div>

      <div v-if="activeTab === 'Todos'">
        <TodoList3 />
        <!-- Your todos content here -->
      </div>

      <div v-if="activeTab === 'Weather'">
        <!-- <twoApi /> -->
        <TwoApiNew />
        <!-- Your weather content here -->
      </div>

      <div v-if="activeTab === 'Profile'">
        <ProfilePage />
        <!-- Your profile content here -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import TodoList2 from "./TodoList2.vue";
// import twoApi from "./temperature/twoApi.vue";
import ProfilePage from "./../components/profilePage/ProfilePage.vue";
import TodoList3 from "./TodoList3.vue";
import TwoApiNew from "./TwoApiNew.vue";
export default {
  components: {
    // TodoList2,
    TodoList3,
    // twoApi,
    ProfilePage,
    TwoApiNew,
  },
  data() {
    return {
      activeTab: "Dashboard",
      welcomeMessage: "",
      quote: "",
      currentTime: "",
      bgColor: localStorage.getItem("bgColor") || "white",
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
        this.currentTime = new Date().toLocaleTimeString();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  height: 100vh;
  width: 100vw;
}

nav {
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}

nav ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
}

nav li {
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
}

nav li.active {
  background-color: #4caf50;
}

.content {
  padding: 20px;
}
</style>
