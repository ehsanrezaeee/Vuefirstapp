<template>
  <div class="page-container">
    <nav class="navbar">
      <div class="logo">My App</div>
      <div class="navbar-buttons">
        <button v-if="!loggedIn" @click="showLogin = true">Login</button>
        <button v-if="loggedIn" @click="logout">Logout</button>
      </div>
    </nav>
    <div class="content-container">
      <div class="tabs-container">
        <div
          class="tab"
          @click="activeTab = 'dashboard'"
          :class="{ active: activeTab === 'dashboard' }"
        >
          Dashboard
        </div>
        <div
          class="tab"
          @click="activeTab = 'todos'"
          :class="{ active: activeTab === 'todos' }"
        >
          Todos
        </div>
        <div
          class="tab"
          @click="activeTab = 'weather'"
          :class="{ active: activeTab === 'weather' }"
        >
          Weather
        </div>
        <div
          class="tab"
          @click="activeTab = 'profile'"
          :class="{ active: activeTab === 'profile' }"
        >
          Profile
        </div>
      </div>
      <div class="tab-content-container">
        <div v-if="activeTab === 'dashboard'" class="dashboard-tab">
          <h1>{{ welcomeMessage }}</h1>
          <div class="quote">{{ quote }}</div>
        </div>
        <h1 v-if="activeTab === 'todos'">Todos</h1>
        <h1 v-if="activeTab === 'weather'">Weather</h1>
        <h1 v-if="activeTab === 'profile'">Profile</h1>
      </div>
    </div>
    <LoginPage
      v-if="showLogin"
      @login="handleLogin"
      @close="showLogin = false"
    />
  </div>
</template>

<script>
import axios from "axios";
import LoginPage from "./LoginPage.vue";

export default {
  components: {
    LoginPage,
  },
  data() {
    return {
      activeTab: "dashboard",
      welcomeMessage: "",
      quote: "",
      showLogin: false,
      loggedIn: localStorage.getItem("loggedIn") || false,
    };
  },
  mounted() {
    const username = localStorage.getItem("username");
    if (username) {
      this.welcomeMessage = `Welcome, ${username}!`;
    }

    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        this.quote = response.data.content;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleLogin() {
      this.loggedIn = true;
      localStorage.setItem("loggedIn", true);
    },
    logout() {
      this.loggedIn = false;
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("username");
      this.welcomeMessage = "";
      this.showLogin = false;
    },
  },
};
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar-buttons {
  display: flex;
  align-items: center;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}

.tabs-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  width: 150px;
  background-color: #ddd;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.tab {
  padding: 10px;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
}

.tab.active {
  background-color: #4caf50;
  color: white;
}

.tab-content-container {
  margin-left: 170px;
  padding: 20px;
}

.dashboard-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.quote {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.5;
}
</style>
