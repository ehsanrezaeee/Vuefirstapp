<template>
  <div class="login-container">
    <div v-if="!loggedIn" class="login-form">
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="username"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <div v-if="loggedIn" class="welcome-message">
      <nav class="navbar">
        <div class="logo">Ehsan's First App</div>
        <div class="navbar-buttons">
          <button class="navbar-buttons" v-if="loggedIn" @click="logout">
            Logout
          </button>
        </div>
      </nav>
      <HomePage />
    </div>
  </div>
</template>

<script>
import HomePage from "../HomePage.vue";

export default {
  components: {
    HomePage,
  },
  data() {
    return {
      username: localStorage.getItem("username") || "",
      loggedIn: localStorage.getItem("loggedIn") || false,
      welcomeMessage: "",
      quote: "",
      currentTime: "",
    };
  },
  methods: {
    login() {
      this.loggedIn = true;
      localStorage.setItem("username", this.username);
      localStorage.setItem("loggedIn", true);
    },
    logout() {
      this.username = "";
      this.loggedIn = false;
      localStorage.removeItem("username");
      localStorage.removeItem("loggedIn");
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-size: 24px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  margin-bottom: 10px;
}
input {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.navbar {
  display: flexbox;
  flex-direction: row;
  justify-content: space-between;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 6.5rem;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #3e8e41;
}
.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.welcome {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.quote {
  font-style: italic;
  margin-bottom: 20px;
}
.time {
  font-size: 18px;
  font-weight: bold;
}
</style>
