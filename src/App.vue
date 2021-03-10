<template>
  <v-app class="app">
    <v-app-bar color="primary accent-4" app dark>
      <v-toolbar-title>Hospital VuenaVista</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="mx-3" to="/">
        <v-icon class="mr-2">mdi-home</v-icon>
        Inicio
      </v-btn>
      <v-btn text class="mx-3" to="/about">
        <v-icon class="mr-2">mdi-help</v-icon>
        About
      </v-btn>
      <v-btn text class="mx-3" to="/login">
        <v-icon class="mr-2">mdi-login</v-icon>
        Login
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer color="#0a2463" class="footer d-flex justify-center">
      <p class="ma-2" style="color: white;">
        Hecho con amor, en dos horas, por 3 estudiantes topados de cafeina
      </p>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>

<style scoped></style>
