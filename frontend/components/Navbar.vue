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
import Swal from 'sweetalert2'
export default {
  computed: {
    users() {
      return this.$store.state.user.user.role
    },
  },
  methods: {
    redirectCreatVote() {
      if(this.users == "admin") {
        this.$router.push('/create-poll')
      } else {
        Swal.fire({
            title: 'Only admin can create poll',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
      }
    },
    redirectHome() {
      this.$router.push('/')
    }
  }
}
</script>