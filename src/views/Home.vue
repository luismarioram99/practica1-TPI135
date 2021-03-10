<template>
  <div class="home">
    <v-container fluid class="px-0 py-0">
      <v-parallax
        class="px-0 py-0 elevation-15"
        src="https://picsum.photos/2000/1000?random"
      >
        <v-overlay
          value="true"
          color="primary"
          opacity="0.8"
          absolute
          class="px-0 py-0"
        >
          <h1>El mejor servicio hospitalario para tu familia</h1>
        </v-overlay>
      </v-parallax>
    </v-container>
    <v-container>
      <center class="my-10">
        <h2>Somos la mejor red de hospitales del pais.</h2>
        <p>Conoce nuestros servicios!</p>
      </center>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/hospital1.jpg"
              height="200px"
            ></v-img>

            <v-card-title> La mejor atención para ti</v-card-title>

            <v-card-subtitle> Instalaciones de primera calidad para tu familia </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Mostrar más </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show1 = !show1">
                <v-icon>{{
                  show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique dignissim magna in scelerisque. Aliquam non justo ut augue scelerisque vestibulum. Sed ac luctus lacus. Suspendisse sollicitudin tortor quis laoreet sodales. Proin laoreet tortor vitae ante sagittis, ut pellentesque libero fringilla. Curabitur ac est arcu.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/hospital2.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Personal de la mejor calidad! </v-card-title>

            <v-card-subtitle> Deja tu salud en nuestras manos. </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Mostrar más </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show2 = !show2">
                <v-icon>{{
                  show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  Vestibulum maximus placerat ultricies. Pellentesque ipsum est, viverra eu auctor id, sollicitudin condimentum mi. Aenean porttitor ac lacus in tristique. Curabitur maximus metus in nisl blandit gravida. Proin convallis libero eget accumsan auctor. Duis id massa in lectus pellentesque porta. Ut dictum tortor imperdiet massa pellentesque convallis.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/hospital3.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Tenemos la vacuna del Covid-19 </v-card-title>

            <v-card-subtitle> Directita de la mano de Nayib Bukele </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Mostrar más </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show3 = !show3">
                <v-icon>{{
                  show3? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>

                <v-card-text>
                 Maecenas ultricies risus elit, vel lobortis dui viverra a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec ultricies nulla. Morbi quis congue velit. Suspendisse ac dolor a neque fringilla malesuada. Nulla viverra vitae metus laoreet rhoncus. 
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  data (){
    return {
      show1: false,
      show2: false,
      show3: false,
    }
  }
};
</script>

<style scoped>
.home {
}
</style>
