<template>
  <v-container align="center">
    <v-card
      elevation="20"
      outlined
      shaped
      align="center"
      class="pa-8"
      width="600"
      v-if="message == 'undefined'"
    >
    <v-card-title class="justify-center">Hello {{user.email}} please login here!</v-card-title>
      <v-btn
        color="main"
        class="mr-4 white--text mb-4"
        width="100%"
        height="50"
        @click="loginWithGoogle"
      >
        LOGIN
      </v-btn>
    </v-card>

        <v-card
      elevation="20"
      outlined
      shaped
      align="center"
      class="pa-8"
      width="600"
      v-else
    >
    <v-card-title class="justify-center">{{message}}</v-card-title>
      <v-btn
        color="#EA4335"
        class="mr-4 white--text mb-4"
        width="100%"
        height="50"
        href="/login"
      >
        Go back
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
    };
  },
  created() {
    this.user.email = this.$route.query.email;
    this.user.password = this.$route.query.password;
    this.message = this.$route.query.message;
    console.log(this.message);
    // if (this.message != "undefined") {
    //   Swal.fire({
    //     title: "Go back",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.$router.push("/login");
    //     }
      //});
    //}
  },
  methods: {
    loginWithGoogle() {
      this.$store.dispatch("user/login", this.user);
    },
  },
};
</script>