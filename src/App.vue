<template>
  <v-app>
    <v-content>
      <Reports/>
    </v-content>
  </v-app>
</template>

<script>
import Reports from './components/Reports.vue';

export default {
  name: 'App',

  components: {
    Reports,
  },

  data: () => ({
    //
  }),
};
</script>
