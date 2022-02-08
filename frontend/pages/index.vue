<template>
  <v-app>
    <Navbar />
    <Header />
    <v-tabs
      v-model="tab"
      background-color="main"
      slider-color="yellow"
      centered
      dark
    >
      <v-tab href="#tab-1">
        Recents
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <ListVote />
        </v-card>
      </v-tab-item>
    </v-tabs-items>


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        tab: null
      }
    },
  }
</script>