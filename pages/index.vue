<template>
	<v-app>
		<v-card>
			<v-list>
				<v-list-group>
					<v-list-item
						v-for="(content, index) in contents"
						:key="index"
					>
						<nuxt-link
							:to="{
								name: 'posts-id',
								params: { id: content.id }
							}"
						>
							{{ content.title }}
						</nuxt-link>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-card>
	</v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import {} from '@nuxtjs/axios'
import { MicroCMS, Content } from '@/types/microcms'

@Component
export default class extends Vue {
	async asyncData(context: Context) {
		const { $axios } = context
		const contents: Content[] = await $axios
			.$get('https://ephemeral9794.microcms.io/api/v1/blog')
			.then((microcms: MicroCMS) => {
				return microcms.contents
			})
		return { contents }
	}
}
</script>
