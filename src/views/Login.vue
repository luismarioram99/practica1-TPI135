<template>
  <v-layout align-center justify-center style="margin-top:200px">
    <v-flex xs12 sm8 md6 lg5 xl4>
      <v-card>
        <v-toolbar dark color="blue darken-3">
          <v-toolbar-title> Hospital Buenavista</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="email"
            autofocus
            color="#247BA0"
            label="Email"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            color="#247BA0"
            label="Contraseña"
            required
          >
          </v-text-field>
          <v-flex v-if="error" style="color: #fb3640; font-weight: bold">
            {{ error }}
          </v-flex>
        </v-card-text>
        <v-card-actions class="px-3 pb-3">
          <v-flex text-xs-right style="text-align: right">
            <v-btn @click="ingresar" color="primary">Ingresar</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    ingresar() {},
  },
};
</script>

<style></style>

