<template>
  <v-app>
    <Navbar />
    <!-- <Header /> -->
    <v-container class="mx-auto pt-8 pb-8">
      <Tab />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    users() {
      return this.$store.state.user.user.role;
    },
  },
  mounted() {
    this.$store.dispatch("user/authJwt");
  },
};
</script>