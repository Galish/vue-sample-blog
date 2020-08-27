<template>
	<div class="eight wide tablet four wide computer column">
		<div class="ui raised card unstackable">
			<div class="content">
				<div class="header">
					{{ capitalize(post.title) }}
				</div>

				<div class="meta">
					<span class="category">
						25.08.2020
					</span>
				</div>

				<div class="description">
					{{ capitalize(post.body) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { capitalize } from '@/utils'

export default {
	name: 'PostItem',
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	methods: {
		capitalize
	}
}
</script>

<style scoped>
.ui.card, .ui.cards>.card {
	min-height: 100%;
	width: auto;
}
</style>
