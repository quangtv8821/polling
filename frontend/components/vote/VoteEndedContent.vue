<template>
  <v-card class="mx-auto" color="#a29bfe" dark max-width="1200">
    <v-card-title>
      <v-icon large left> mdi-vote </v-icon>
      <span class="text-h5 font-weight-light">The vote has ended</span>
    </v-card-title>

    <v-card-subtitle class="font-weight-bold" v-text="`End in: ` + poll.end">
    </v-card-subtitle>

    <v-card-text class="text-h4 font-weight-bold">
      {{ poll.title }}
    </v-card-text>
    <v-card-text class="text-h6 font-weight-bold"> Winner table: </v-card-text>

    <v-card-actions>
      <v-simple-table light two-line outlined class="mt-8 table-winner">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in most_vote" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      poll: {},
      votes: [],
      most_vote: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`http://localhost:5500/polls/${this.$route.query.id}`)
        .then((res) => {
          this.poll = res.data.polls;
          this.votes = res.data.votes;
          this.most_vote = res.data.most_vote;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.table-winner {
  width: 1200px;
}
</style>