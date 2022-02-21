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
      total: null,
      socket: null,
      checkbox: [],
      poll : {
          title : null,
          end: null
      },
      votes: []
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.user.id
    }
  },
  created() {
    this.connectToServer()
  },
  mounted() {
    this.getTitleData()
    this.getContentData()
  },
  methods: {
    getContentData() {
      axios.get(`http://localhost:5500/polls/?id=${this.$route.query.id}`)
      .then(res => {
        this.votes = res.data
        const promise = this.votes.map(vote => {
          this.insertUserVote(vote.id)
          this.checkUserVote(vote.id)
        })
        Promise.all(promise)
      })
      .catch(error => {
        console.log(error);
      })
    },
    getTitleData() {
      axios.get(`http://localhost:5500/polls/poll-title/?id=${this.$route.query.id}`)
      .then(res => {
        this.poll.title = res.data[0].title
        this.poll.end = res.data[0].end
      })
      .catch(error => {
        console.log(error);
      })
    },
    changeVote(id, value) {
      //this.getTotal(id)
      if(value == 1) {
        this.$store.dispatch('vote/increaseVote', {vote_id: id})
        this.$store.dispatch('vote/setStatusVote',{user_id : this.userId, vote_id : id})
        this.socket.emit('increase', this.total)
        console.log(this.total)
      }
      if(value == 0) {
        this.$store.dispatch('vote/decreaseVote', {vote_id: id})
        this.$store.dispatch('vote/setStatusVoteDecrease',{user_id : this.userId, vote_id : id})
        this.socket.emit('decrease', this.total)
        console.log(this.total)
      }
    },
    insertUserVote(id) {
      //check if user isnt vote -> create a row in is_voted table
      const data = {
        id_user : this.userId,
        id_vote : id
      }
      axios.post(
        `http://localhost:5500/is-voted/check-user`,
        data
      )
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      })
    },
    checkUserVote(id) {
        //check if user isnt vote -> create a row in is_voted table
        const data = {
            id_user : this.userId,
            id_vote : id
        }
        axios.post(
          `http://localhost:5500/is-voted/check-vote`,
          data
        )
        .then(res => {
          this.checkbox.push(res.data.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    connectToServer() {
      this.socket = io.connect(`http://localhost:5500/`, { secure: true })
    },
    getTotal(id) {
      axios.post('http://localhost:5500/total', {vote_id: id})
      .then(res => {
        this.total = res.data["0"].total
        console.log(this.total);
      })
    }
  }
}
</script>