<template>
  <v-data-table
    :headers="headers"
    :items="submissions"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Reports',

  data: () => ({
    headers: [
      { text: 'Nume', value: 'full_name' },
      { text: 'Sector', value: 'sector' },
      { text: 'Total', value: 'count' },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch('getSubmissions');
  },

  computed: mapState(['submissions']),
};
</script>
