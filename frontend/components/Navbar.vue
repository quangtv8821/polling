<template>
  <v-card>
    <v-toolbar  
      color="main"
      class="white--text">
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

      <v-toolbar-title>Polling realtime app</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white" @click="redirectHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon color="white" @click="redirectCreatVote">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <Logout />
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    redirectCreatVote() {
      window.location.href = "http://localhost:3000/create-vote"
    },
    redirectHome() {
      window.location.href = "http://localhost:3000/"
    }
  }
}
</script>