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
import axios from 'axios'
export default {
  data () {
    return {
      tab: null
    }
  },
  mounted() {
    this.$store.dispatch('user/authJwt')
  }
}
</script>