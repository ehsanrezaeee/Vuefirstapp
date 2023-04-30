<template>
  <v-container
    fluid
    :dir="dir"
    class="wrapper"
    :style="{ backgroundColor: bgColor }"
  >
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <v-card color="primary" dark>
          <v-card-title>{{ $t("tabs.title") }}</v-card-title>
          <v-list dense>
            <v-list-item-group v-model="activeTab">
              <v-list-item
                :value="'Dashboard'"
                @click="activeTab = 'Dashboard'"
              >
                <v-list-item-title>{{
                  $t("tabs.dashboard")
                }}</v-list-item-title>
              </v-list-item>
              <v-list-item :value="'Todos'" @click="activeTab = 'Todos'">
                <v-list-item-title>{{ $t("tabs.todos") }}</v-list-item-title>
              </v-list-item>
              <v-list-item :value="'Weather'" @click="activeTab = 'Weather'">
                <v-list-item-title>{{ $t("tabs.weather") }}</v-list-item-title>
              </v-list-item>
              <v-list-item :value="'Profile'" @click="activeTab = 'Profile'">
                <v-list-item-title>{{ $t("tabs.profile") }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="9">
        <v-card class="fill-height">
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
      bgColor: "white",
      dir: localStorage.getItem("dir") || "rtl",
    };
  },
  methods: {
    handleBgColorChanged(color) {
      this.bgColor = color;
    },
    updateDir(dir) {
      this.dir = dir;
    },
  },
};
</script>

<style>
.wrapper {
  /* display: flex;
  flex-direction: row; */
  margin-top: 4rem;
  /* height: 100vh;
  width: 100vw; */
}

.fill-height {
  height: 100%;
}
</style>
