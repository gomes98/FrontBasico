<template>
  <v-app>
    <Menu />
    <AppBar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>Footer da aplicação</v-footer>
  </v-app>
</template>

<script>
import Menu from "./components/Template/Menu";
import AppBar from "./components/Template/AppBar";
export default {
  name: "App",
  components: {
    Menu,
    AppBar,
  },
  data: () => ({}),
  computed: {},
  watch: {},
  created() {},
};
</script>
