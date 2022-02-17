<template>
    <v-container align="center">
        <v-card
            elevation="10"
            outlined
            align="center"
            class="pa-8"
            width="1200"
        >
            <v-card-title class="justify-center">Create a new poll</v-card-title>

            <v-form
                ref="form"
                lazy-validate
            >
                <v-row>
                    <v-text-field
                        v-model="poll.title"
                        :counter="30"
                        label="Vote title"
                        required
                        :rules="titleRules"
                        class="pt-2 pb-2"
                        clearable
                        height="20"
                    ></v-text-field>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="poll.total_vote"
                            label="Maximum vote"
                            required
                            class="pt-2 pb-2"
                            height="20"
                            type="number"
                            :rules="numberRules"
                            min="1"
                            max="4"
                            readonly
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="poll.start"
                            label="Start event"
                            required
                            class="pt-2 pb-2"
                            clearable
                            height="20"
                            type="datetime-local"
                            :rules="startDateRules"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="poll.end"
                            label="End event"
                            required
                            class="pt-2 pb-2"
                            clearable
                            height="20"
                            type="datetime-local"
                            :rules="endDateRules"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row
                    v-for="(item, index) in poll.vote"
                    :key="index"
                >
                    <v-col
                        cols="12"
                        sm="8"
                        md="10"
                    >
                        <v-text-field
                            v-model="poll.vote[index]"
                            label="Choice"
                            required
                            class="pt-2 pb-2"
                            height="20"
                            :rules="choiceRules"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="2"
                        md="1"
                    >
                        <v-btn icon
                        color="green"
                        class="white--text"
                        @click="addChoice">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    </v-col>

                    <v-col
                        cols="2"
                        md="1"
                    >
                        <v-btn icon
                            color="red"
                            class="white--text"
                            @click="removeChoice">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-btn
                        color="main"
                        class="mr-4 white--text mt-8"
                        width="100%"
                        height="50"
                        @click="submitVote"
                    >
                    Submit
                </v-btn></v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            poll : {
                title: null,
                total_vote: 1,
                start: null,
                end: null,
                vote: [""],
            },
            titleRules: [
                v => !!v || 'Title is required'
            ],
            numberRules: [
                v => !!v || 'You must enter number'
            ],
            startDateRules: [
                v => !!v || 'You must enter start date'
            ],
            endDateRules: [
                v => !!v || 'You must enter end date'
            ],
            choiceRules: [
                v => !!v || 'You must enter choice'
            ],
        }
    },
    methods: {
        addChoice(choice) {
            if(this.poll.vote.length == 4) {
                alert("You can't add more choice")
                return
            }
            this.poll.total_vote++
            this.poll.vote.push("")
        },
        removeChoice(index) {
            if(this.poll.vote.length == 1) {
                alert("You must have at least 1 choice")
                return
            }
            this.poll.total_vote--
            this.poll.vote.splice(index, 1)
        },
        submitVote() {
            this.$refs.form.validate()
            this.$store.dispatch("poll/createPoll", this.poll)
        }
    }
}
</script>
