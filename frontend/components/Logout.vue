<template>
  <v-btn icon color="red" @click="logout">
    <v-icon>mdi-logout</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
  },
};
</script>