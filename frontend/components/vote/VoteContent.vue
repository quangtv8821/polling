<template>
  <v-card class="mx-auto" color="#a29bfe" dark max-width="1200">
    <v-card-title>
      <v-icon large left>mdi-vote</v-icon>
      <span class="text-h5 font-weight-light">Vote here</span>
    </v-card-title>

    <v-card-subtitle class="font-weight-bold" v-text="`End in: ` + poll.end" />

    <v-card-text class="text-h4 font-weight-bold">{{poll.title}}</v-card-text>

    <v-card-actions>
      <v-list
        color="main"
        two-line
        flat
        width="1200"
        class="mt-8"
      >
        <v-list-item-group
          multiple
        >
          <v-list-item 
              v-for="(item, index) in votes"
              :key="item.choice"
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
                  <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.total"></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
import { io } from "socket.io-client"
import axios from 'axios'
export default {
  data() {
    return {
      socket: null,
      checkbox: [],
      poll : {},
      votes: []
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.user.id
    }
  },
  created() {
    //this.connectToServer()
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get(`http://localhost:5500/polls/${this.$route.query.id}`)
      .then(res =>  {
        this.poll = res.data.polls
        this.votes = res.data.votes
        // const promise = this.votes.map(vote => {
        //   this.getStatusVote(vote.id)
        // })
        // Promise.all(promise)
        const results = await Promise.all(this.votes.map(vote => {
          this.getStatusVote(vote.id)
        }))
        console.log(results);
        // console.log(this.getStatusVote(1))
        // console.log(this.getStatusVote(2))
        // console.log(this.getStatusVote(3))
        // console.log(this.getStatusVote(4))
      })
      .catch(error => {
        console.log(error);
      })
    },
    changeVote(id, value) {
      if(value == 1) {
        this.$store.dispatch('vote/increaseVote', {vote_id: id, user_id: this.userId})
        this.socket.emit('increase', '1')
        // console.log(this.total)
      }
      if(value == 0) {
        this.$store.dispatch('vote/decreaseVote', {vote_id: id, user_id: this.userId})
        this.socket.emit('decrease', '0')
        // console.log(this.total)
      }
    },
    async getStatusVote(id) {
      console.log(id)
      return await axios.post(
        `http://localhost:5500/vote`,
        {
          user_id : this.userId,
          vote_id : id
        }
      )
    },
    connectToServer() {
      this.socket = io.connect(`http://localhost:5500/`, { secure: true })
    }
  }
}
</script>