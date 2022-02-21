<template>
    <v-list two-line>
      <v-list-item-group>
        <template class="mt-5">
          <v-list-item  v-for="item in polls"  :key="item.title" >
            <template>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-action-text v-text="item.start" />
                </v-list-item-action>

                <v-list-item-action>
                    <v-btn icon color="red" @click="deletePoll(item.id)">
                    <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                </v-list-item-action>
                </template>
            </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
</template>

<script>
import Swal from 'sweetalert2'
  export default {
    computed: {
        polls() {
            return this.$store.state.list.upcomingPoll.polls
        },
        users() {
            return this.$store.state.user.user.role
        }
    },
    mounted () {
      this.$store.dispatch('list/upcomingPoll/getPolls')
    },
    methods: {
        deletePoll(id) {
            if(this.users == "admin") {
                this.$store.dispatch('poll/deletePoll', {poll_id: id})
            } else {
                Swal.fire({
                    title: 'Only admin can delete poll',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        }
    }
  }
</script>