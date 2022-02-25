<template>
  <v-container align="center">
    <v-card
      elevation="20"
      outlined
      shaped
      align="center"
      class="pa-8"
      width="400"
    >
      <v-card-title class="justify-center">LOGIN</v-card-title>

      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="user.email"
          :counter="30"
          label="E-mail"
          outlined
          required
          :rules="emailRules"
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          type="password"
          label="Password"
          outlined
          required
          :rules="passwordRules"
        ></v-text-field>

        <v-btn
          color="main"
          class="mr-4 white--text mb-4"
          width="100%"
          height="50"
          @click="checkForm"
        >
          LOGIN
        </v-btn>

        <NuxtLink
          color="white"
          class="mr-4 red--text"
          width="100%"
          height="25"
          outlined
          to="/register"
        >
          Register
        </NuxtLink>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    checkForm() {
      this.$refs.form.validate();
      this.$store.dispatch("user/login", this.user);
      //this.login();
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async login() {
      
    },
  },
};
</script>