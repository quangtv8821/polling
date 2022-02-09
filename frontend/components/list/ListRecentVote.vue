<template>
    <v-list two-line>
      <v-list-item-group
        multiple
      >
        <template v-for="(item, index) in items" class="mt-5">
          <v-list-item :key="item.title" @click="changePage">
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.start"></v-list-item-action-text>
                <v-list-item-action-text v-text="item.end"></v-list-item-action-text>

              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
        {
          start: '8:00 PM',
          end: "10:00 PM",
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
      ],
    }),
    methods: {
        changePage() {
            window.location.href = "http://localhost:3000/vote_content"
        }
    }
  }
</script>