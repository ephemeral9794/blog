<template>
	<v-app>
		<h1>{{ post.title }}</h1>
		<Marked :content="post.content" />
		<nuxt-link :to="{ name: 'index' }">
			ホームへ戻る
		</nuxt-link>
	</v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import {} from '@nuxtjs/axios'
import { Content } from '@/types/microcms'

import Marked from '~/components/Marked.vue'
@Component({
	components: { Marked }
})
export default class extends Vue {
	async asyncData(context: Context) {
		const { $axios, params } = context

		const id: string = params.id

		const post: Content = await $axios.$get(
			'https://ephemeral9794.microcms.io/api/v1/blog/' + id
		)
		return { post }
	}
}
</script>
