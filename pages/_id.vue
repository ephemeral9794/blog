<template>
  <v-container>
    <v-card>
      <v-card-title>{{ content.title }}</v-card-title>
      <v-card-subtitle>{{ content.createAt | moment }}</v-card-subtitle>
      <v-card-text v-html="markedHTML(content.content)" />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Route } from 'vue-router'
import marked from 'marked'
import hljs from 'highlight.js'
import { Content } from '@/types/microcms'

export default {
  layout: 'main',
  async asyncData({
    params,
    $axios,
    payload
  }: {
    params: Route['params']
    $axios: NuxtAxiosInstance
    payload: any
  }) {
    let content: Content
    if (payload) {
      content = payload
    } else {
      const id = params.id
      content = await $axios.$get('/blog/' + id)
    }
    return { content }
  },
  created() {
    // 作成時にmarkedの初期設定
    // ハイライトにhighlightjsを使うようにする
    marked.setOptions({
      langPrefix: '',
      breaks: true,
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
  },
  methods: {
    markedHTML(content: string): string {
      return marked(content)
    }
  }
}
</script>
