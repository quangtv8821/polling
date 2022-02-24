<template>
  <v-footer padless absolute>
    <v-card class="flex" flat tile>
      <v-card-title class="main">
        <strong class="subheading white--text"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="20px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider inset dark></v-divider>

      <v-card-text class="py-2 text-center">
        {{ new Date().getFullYear() }} — <strong>TranVanQuang</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-youtube", "mdi-gmail", "mdi-instagram"],
  }),
};
</script>