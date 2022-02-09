<template>
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="(item, index) in items" class="mt-5">
          <v-list-item :key="item.title" >
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.start" ></v-list-item-action-text>
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
      selected: [2],
      items: [
        {
          start: 'Start in: 8:00 PM',
          title: 'Title vote',
        },
      ],
    }),
  }
</script>