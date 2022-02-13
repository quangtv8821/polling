<template>
    <v-list two-line>
      <v-list-item-group
        multiple
      >
        <template v-for="(item, index) in items" class="mt-5">
          <v-list-item :key="'key' + index">
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
<!--headline:  most vote -->
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="`Total vote: ` + item.total_vote"></v-list-item-action-text>
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
  import axios from 'axios'
  export default {
    data: () => ({
      items: [
        {
          headline: 'Most voted: Quang',
          subtitle: `Voted: 20`,
          title: 'Title vote',
        },
      ],
    }),
    mounted () {
      this.getItems()
    },
    methods: {
      getItems() {
        axios.get(`http://localhost:5500/ended-vote`)
        .then(respone => {
          console.log(respone.data);
          this.items = respone.data
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>