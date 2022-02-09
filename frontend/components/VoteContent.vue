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

    <v-card-subtitle class="font-weight-bold">
      End in: 5:00 PM
    </v-card-subtitle>

    <v-card-text class="text-h4 font-weight-bold">
      {{title}}
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
        >
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.choice"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
                <v-list-item-action-text v-text="item.number">"hi"</v-list-item-action-text>
            </v-list-item-action>
          </template>
        </v-list-item>
    </v-list-item-group>
    </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
          title: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
          votes: [
            {choice: "Choice 1", number:"10"},
            {choice: "Choice 2", number:"10"},
            {choice: "Choice 3", number:"10"},
            {choice: "Choice 4", number:"10"},
          ]
        }
    }
}
</script>