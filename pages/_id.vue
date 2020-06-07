<template>
  <v-container>
    <v-card>
      <v-card-title>{{ content.title }}</v-card-title>
      <v-card-subtitle>{{ content.createdAt }}</v-card-subtitle>
      <v-card-text>{{ content.content }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Content } from '@/types/microcms'

export default {
  layout: 'main',
  async asyncData({ params, $axios }) {
    const id = params.id
    const content: Content = await $axios.$get('/blog/' + id)

    return { content }
  }
}
</script>
