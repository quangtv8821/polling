<template>
  <v-card class="mx-auto" color="#a29bfe" dark max-width="1200">
    <v-card-title>
      <v-icon large left>mdi-vote</v-icon>
      <span class="text-h5 font-weight-light">Vote here</span>
    </v-card-title>

    <v-card-subtitle class="font-weight-bold" v-text="`End in: ` + poll.end" />

    <v-card-text class="text-h4 font-weight-bold">{{ poll.title }}</v-card-text>

    <v-card-actions>
      <v-list color="main" two-line flat width="1200" class="mt-8">
        <v-list-item-group multiple>
          <v-list-item
            v-for="(item, index) in votes"
            :key="item.choice"
            @click="getUser(item.id)"
          >

            <template>
              <v-list-item-action>
                <v-checkbox
                  v-model="checkbox[index]"
                  v-bind:false-value="0"
                  v-bind:true-value="1"
                  @click="changeVote(item.id, checkbox[index])"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.total"
                ></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
import { io } from "socket.io-client";
import axios from "axios";
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      socket: null,
      checkbox: [],
      poll: {},
      votes: null,
    };
  },
  computed: {
    user() {
      return this.$auth.$storage.getLocalStorage("user");
    },
  },
  created() {
    this.connectToServer();
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await axios.get(
        `http://localhost:5500/polls/${this.$route.query.id}`
      );

      this.poll = res.data.polls;
      this.votes = res.data.votes;
      this.mapStatusVote();
      this.socket.emit("data", this.votes);
    },
    async changeVote(id, value) {
      if (value == 1) {
        await this.$store.dispatch("vote/increaseVote", {
          vote_id: id,
          user_id: this.user.id,
        });
      }
      if (value == 0) {
        await this.$store.dispatch("vote/decreaseVote", {
          vote_id: id,
          user_id: this.user.id,
        });
      }
      Promise.all([this.getData()]);
    },
    async mapStatusVote() {
      const data = await Promise.all(
        this.votes.map((vote) => this.getStatusVote(vote.id))
      );
      this.checkbox = data.map((item) => item.data.status);
    },
    async getStatusVote(id) {
      return await axios.post(`http://localhost:5500/vote`, {
        user_id: this.user.id,
        vote_id: id,
      });
    },
    async getTotalVote(id) {
      const total = await axios.get(`http://localhost:5500/vote/${id}`);
      return total.data.total;
    },
    async getUser(id) {
      const response = await axios.post(`http://localhost:5500/vote/get-user`, {
        vote_id: id,
      });
      Swal.fire({
        title: "Voted user",
        html: response.data
          .map(item => `<div>${item.email}</div>`)
          .join('')
      })
    },
    connectToServer() {
      this.socket = io.connect(`http://localhost:5500/`, { secure: true });
      this.socket.on("data", (msg) => {
        this.votes = msg;
      });
    },
  },
};
</script>