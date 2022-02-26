<template>
  <v-card>
    <v-toolbar color="main" class="white--text">
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

      <v-toolbar-title>Polling realtime app</v-toolbar-title>

      <v-toolbar-title class="ml-6">{{email}}</v-toolbar-title>

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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: null
    }
  },
  computed: {
    user() {
      return this.$auth.$storage.getLocalStorage('user')
    }
  },
  mounted() {
    this.email = this.user.email
  },
  methods: {
    redirectCreatVote() {
      if (this.user.role == "admin") {
        this.$router.push("/create-poll");
      } else {
        Swal.fire({
          title: "Only admin can create poll",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    },
    redirectHome() {
      this.$router.push("/");
    },
  },
};
</script>