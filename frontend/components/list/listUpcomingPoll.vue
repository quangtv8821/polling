<template>
    <v-list two-line>
      <v-list-item-group
        active-class="pink--text"
        multiple
      >
        <template class="mt-5">
          <v-list-item  v-for="item in polls"  :key="item.title" >
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.start" ></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
</template>

<script>
  export default {
    computed: {
      polls() {
        return this.$store.state.list.upcomingPoll.polls
      }
    },
    mounted () {
      this.$store.dispatch('list/upcomingPoll/getPolls')
    }
  }
</script>