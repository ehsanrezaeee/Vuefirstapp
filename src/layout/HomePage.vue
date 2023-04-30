<template>
  <div class="wrapper" :style="{ backgroundColor: bgColor }" :dir="dir">
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
        <welcomeMessage />
      </div>

      <div v-if="activeTab === 'Todos'">
        <TodoList />
      </div>

      <div v-if="activeTab === 'Weather'">
        <TwoApiNew />
      </div>

      <div v-if="activeTab === 'Profile'">
        <ProfilePage
          @bg-color-changed="handleBgColorChanged"
          @dir-changed="updateDir"
        />
      </div>
    </div>
  </div>
</template>

<script>
import welcomeMessage from "./../components/welcomeMessagePage/welcomeMessage.vue";
import ProfilePage from "./../components/profilePage/ProfilePage.vue";
import TodoList from "./../components/todoPage/TodoList.vue";
import TwoApiNew from "./../components/weatherPage/TwoApiNew.vue";
export default {
  components: {
    TodoList,
    ProfilePage,
    TwoApiNew,
    welcomeMessage,
  },
  data() {
    return {
      activeTab: "Dashboard",
      welcomeMessage: "",
      quote: "",
      currentTime: "",
      bgColor: localStorage.getItem("bgColor") || "white",
      dir: "ltr",
    };
  },
  methods: {
    updateDir(dir) {
      this.dir = dir;
    },
    handleBgColorChanged(newBgColor) {
      this.bgColor = newBgColor; // Store the new bgColor value
    },
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
  padding: 2rem;
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
