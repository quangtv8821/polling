<template>
  <v-app>
    <Navbar />
    <!-- <Header /> -->
    <v-container class="mx-auto pt-8 pb-8">
      <VoteContent />
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('user/authJwt')
  }
}
</script>