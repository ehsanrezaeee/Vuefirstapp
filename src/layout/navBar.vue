<template>
  <nav class="navbar">
    <div class="logo">Ehsan's First App</div>
    <div class="navbar-buttons">
      <button class="navbar-buttons" v-if="loggedIn" @click="logout">
        {{ $t("buttons.logout") }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem("username") || "",
      loggedIn: localStorage.getItem("loggedIn") || false,
    };
  },
  methods: {
    logout() {
      this.username = "";
      this.loggedIn = false;
      localStorage.removeItem("username");
      localStorage.removeItem("loggedIn");
      location.reload();
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #65028f;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 5rem;
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
</style>
