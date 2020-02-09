<template>
	<div v-html="markedHTML" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import marked from 'marked'
import hljs from 'highlight.js'
@Component
export default class Marked extends Vue {
	@Prop({
		type: String,
		required: true
	})
	content!: string

	created() {
		marked.setOptions({
			langPrefix: '',
			highlight(code, lang) {
				return hljs.highlightAuto(code, [lang]).value
			}
		})
	}

	private get markedHTML(): string {
		return marked(this.content)
	}
}
</script>
