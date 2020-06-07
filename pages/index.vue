<template>
  <v-container fluid>
    <v-card class="mx-3">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(content, i) in contents"
            :key="i"
            :to="`/${content.id}`"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>{{ content.title }}</v-list-item-title>
              <v-list-item-subtitle>{{
                content.createdAt | moment
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@vue/composition-api'
import { Content, MicroCMSResult } from '@/types/microcms'

export default defineComponent({
  layout: 'main',
  setup(_props, context) {
    const contents = ref<Content[]>()

    watchEffect(async () => {
      const result: MicroCMSResult = await context.root.$axios.$get('/blog')
      contents.value = result.contents
    })

    return {
      contents
    }
  }
})
</script>
