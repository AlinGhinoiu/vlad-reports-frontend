import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ro from 'vuetify/es5/locale/ro';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ro },
    current: 'ro',
  },
  icons: {
    iconfont: 'fa',
  },
});
