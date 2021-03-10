<template>
  <div class="home">
    <v-container fluid class="px-0 py-0">
      <v-parallax class="px-0 py-0 elevation-15" src="https://picsum.photos/2000/1000?random">
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  .home{
    
  }
</style>
