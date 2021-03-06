import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0A2463',
        secondary: '#FB3640',
        accent: '#FB3640',   
        blue: '#247BA0'
      }
    }
  }
});
