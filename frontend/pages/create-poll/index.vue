<template>
  <v-app>
    <Navbar />
    <!-- <Header /> -->
    <v-container>
      <v-row align="center">
        <v-col align="center">
          <CreatePoll />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
export default {
  middleware: 'guest',
};
</script>