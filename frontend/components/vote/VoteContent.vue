<template>
  <v-card
    class="mx-auto"
    color="#a29bfe"
    dark
    max-width="1200"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-vote
      </v-icon>
      <span class="text-h5 font-weight-light">Vote here</span>
    </v-card-title>

    <v-card-subtitle class="font-weight-bold" v-text="`End in: ` + poll.end">
    </v-card-subtitle>

    <v-card-text class="text-h4 font-weight-bold">
      {{poll.title}}
    </v-card-text>

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
            v-for="item in votes"
            :key="item.choice"
            @click="increaseVote(item.id)"
        >
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
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
import axios from 'axios'
export default {
  data() {
      return {
        poll : {
          title : null,
          end: null
        },
        votes: []
      }
  },
  mounted() {
    this.getTitleData()
    this.getContentData()
  },
  methods: {
    getContentData() {
      axios.get(`http://localhost:5500/get-poll/poll-content/?id=${this.$route.query.id}`)
      .then(res => {
        this.votes = res.data
      })
      .catch(error => {
        console.log(error);
      })
    },
    getTitleData() {
      axios.get(`http://localhost:5500/get-poll/poll-title/?id=${this.$route.query.id}`)
      .then(res => {
        this.poll.title = res.data[0].title
        this.poll.end = res.data[0].end
      })
      .catch(error => {
        console.log(error);
      })
    },
    increaseVote(id) {
      const obj = {
        vote_id: id
      }
      axios.post(
        `http://localhost:5500/increase-vote`,
        obj
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>