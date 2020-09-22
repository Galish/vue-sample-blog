<template>
	<div class="ui text container">
		<h2 class="ui header">
			{{ capitalize(title) }}

			<div class="sub header">
				{{ dateStamp }}
			</div>
		</h2>

		<p>{{ capitalize(body) }}</p>
		<p>{{ capitalize(body) }}</p>
		<p>{{ capitalize(body) }}</p>
		<p>{{ capitalize(body) }}</p>
		<p>{{ capitalize(body) }}</p>
	</div>
</template>

<script>
import { capitalize } from '@/helpers'

export default {
	name: 'PostDetail',
	props: {
		id: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			default: '-title-'
		},
		body: {
			type: String,
			default: '-body-'
		},
		dateStamp: {
			type: String,
			default: '2 days ago'
		}
	},
	methods: {
		capitalize
	}
}
</script>

<style scoped>
.ui.text.container {
	padding-bottom: 40px;
}
</style>
