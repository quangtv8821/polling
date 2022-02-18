<template>
    <v-list two-line>
        <v-list-item-group
            multiple
        >
            <template class="mt-5">
            <v-list-item v-for="item in polls" :key="item.id" @click="changePage(item)">
                <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <!-- <v-list-item-subtitle
                    class="text--primary"
                    v-text="`Most vote: ` + item.most_vote"
                ></v-list-item-subtitle> -->

                </v-list-item-content>

                <v-list-item-action>
                <v-list-item-action-text v-text="`Total vote: ` + item.total_vote"></v-list-item-action-text>
                <v-list-item-action-text v-text="item.end"></v-list-item-action-text>

                </v-list-item-action>
            </v-list-item>
            </template>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    computed: {
        polls() {
            return this.$store.state.list.endedPoll.polls
        }
    },
    mounted () {
            this.$store.dispatch('list/endedPoll/getPolls')
    },
    methods: {
        changePage(item) {
            this.$router.push(`/vote-end?id=${item.id}`)
        },
    },
}
</script>