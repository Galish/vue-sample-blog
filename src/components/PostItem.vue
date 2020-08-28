<template>
	<div class="eight wide tablet four wide computer column">
		<div class="ui raised card unstackable">
			<div class="content">
				<div class="header">
					{{ capitalize(post.title) }}
				</div>

				<div class="meta">
					<span class="category">
						2 days ago
					</span>
				</div>

				<div class="description">
					{{ capitalize(post.body) }}
				</div>
			</div>

			<div
				v-if="post.author"
				class="extra content"
			>
				<div class="right floated author">
					<img
						class="ui avatar image"
						:src="avatarSrc"
					>
					{{ post.author.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { capitalize, getUserAvatar } from '@/helpers'

export default {
	name: 'PostItem',
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	computed: {
		avatarSrc() {
			return this.getUserAvatar(this.post.author.id)
		}
	},
	methods: {
		capitalize,
		getUserAvatar
	}
}
</script>

<style scoped>
.ui.card, .ui.cards>.card {
	min-height: 100%;
	width: auto;
}
</style>
