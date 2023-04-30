<template>
  <div>
    <LoginLogoutPage />
  </div>
</template>

<script>
import LoginLogoutPage from "./components/loginLogout/LoginLogoutPage.vue";
export default {
  components: {
    LoginLogoutPage,
  },
};
</script>

<style>
#app {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #072c51;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/* Set base font size and line height */
html {
  font-size: 16px;
  line-height: 1.5;
}

/* Set max-width for the main container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

/* Use flexbox for the header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

/* Use media queries to adjust styles for different screen sizes */
@media (max-width: 768px) {
  /* Reduce font size for small screens */
  html {
    font-size: 14px;
  }

  /* Adjust layout for small screens */
  .container {
    padding: 0 10px;
  }

  /* Adjust layout for small screens */
  header {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Use flexbox for the main content */
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

/* Use grid layout for the footer */
footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
}

/* Optimize images for mobile devices */
img {
  max-width: 100%;
  height: auto;
}
</style>
