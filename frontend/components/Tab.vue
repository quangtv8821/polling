<template>
  <v-card color="white">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">POLLING</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="main"
      slider-color="#eb4d4b"
      dark
      left
    >
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card v-if="item === 'Ended'">
          <ListEndedPoll />
        </v-card>
        <v-card v-if="item === 'Recent'">
          <ListRecentPoll />
        </v-card>
        <v-card v-if="item === 'Upcoming'">
          <ListUpcomingPoll />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      componentKey: 0,
      items: ["Ended", "Recent", "Upcoming"],
    };
  },
};
</script>