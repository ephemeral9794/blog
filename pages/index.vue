<template>
  <v-container>
    <v-row v-for="content in contents" :key="content">
      <v-card min-width="500" class="my-3">
        <v-card-title>
          {{ content.title }}
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@vue/composition-api'

type Content = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
}
type MicroCMSResult = {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}

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
