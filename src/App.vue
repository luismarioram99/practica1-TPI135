<template>
  <v-app>
 <v-app-bar
      color="primary accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Hospital VuenaVista</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="mx-3">
        <v-icon class="mr-2">mdi-help</v-icon>
        About
      </v-btn>

      <v-btn text class="mx-3">
        <v-icon class="mr-2">mdi-login</v-icon>
        Login
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
//    HelloWorld,
  },

  data: () => ({
    
  }),
}; 
</script>
