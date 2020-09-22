<template>
	<div class="eight wide tablet four wide computer column">
		<div class="ui raised card unstackable">
			<div
				class="content"
				:class="{ 'center aligned': view === 'short' }"
			>
				<div class="header">
					<router-link
						:is="!hideLink && 'router-link' || 'fragment'"
						:to="`/feed/${post.id}`"
					>
						{{ capitalize(post.title) }}
					</router-link>
				</div>

				<div
					v-if="view !== 'short'"
					class="meta"
				>
					<span class="category">
						{{ dateStamp }}
					</span>
				</div>

				<div
					class="description"
				>
					{{ capitalize(postBody) }}
				</div>
			</div>

			<div
				v-if="post.author"
				class="extra content"
				:class="{ 'center': view === 'short' }"
			>
				<div
					class="author"
					:class="{
						'right floated': view === 'full',
						'center aligned': view === 'short'
					}"
				>
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
import { capitalize, getUserAvatar, truncate } from '@/helpers'

export default {
	name: 'PostItem',
	props: {
		dateStamp: {
			type: String,
			default: '2 days ago'
		},
		hideLink: {
			type: Boolean,
			default: false
		},
		post: {
			type: Object,
			required: true
		},
		view: {
			type: String,
			default: 'full'
		}
	},
	computed: {
		avatarSrc() {
			return this.getUserAvatar(this.post.author.id)
		},
		postBody() {
			return this.view === 'short' ? truncate(this.post.body) : this.post.body
		}
	},
	methods: {
		capitalize,
		getUserAvatar,
		truncate
	}
}
</script>

<style scoped>
.ui.card, .ui.cards>.card {
	min-height: 100%;
	width: auto;
}
</style>
