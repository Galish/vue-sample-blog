<template>
	<page-navigation
		:page-size="PAGE_SIZE"
		:total-count="postsTotalCount"
		@fetchData="fetchData"
	>
		<post-list
			:posts="postsWithAutorData"
		/>
	</page-navigation>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PageNavigation from '@/components/PageNavigation.vue'
import PostList from '@/components/PostList.vue'

const PAGE_SIZE = 12

export default {
	name: 'FeedView',
	components: {
		PageNavigation,
		PostList
	},
	computed: {
		...mapGetters([ 'users', 'posts', 'postsTotalCount' ]),
		authorIDs() {
			const set = new Set();

			(this.posts || []).forEach(({ userId }) => set.add(userId))

			return [ ...set ]
		},
		authorsMap() {
			return (this.users || [])
				.filter(({ id }) => this.authorIDs.includes(id))
				.reduce((acc, user) => ({
					...acc,
					[ user.id ]: user
				}), {})
		},
		postsWithAutorData() {
			if (
				!this.posts
				||
				!this.posts.every(({ userId }) => this.authorsMap[ userId ])
			) {
				return null
			}
			return this.posts.map(({ userId, ...post }) => ({
				...post,
				author: this.authorsMap[ userId ]
			}))
		}
	},
	watch: {
		posts() {
			this.fetchAuthors()
		}
	},
	created() {
		this.PAGE_SIZE = PAGE_SIZE
	},
	beforeDestroy() {
		this.clearPosts()
		this.clearUsers()
	},
	methods: {
		...mapActions([ 'fetchPosts', 'clearPosts', 'fetchUser', 'clearUsers' ]),
		fetchData(page = 1) {
			this.fetchPosts({ limit: this.PAGE_SIZE, page })
		},
		fetchAuthors() {
			const existing = (this.users || []).map(({ id }) => id)
			const missing = this.authorIDs.filter(id => !existing.includes(id))
			const promises = missing.map(id => this.fetchUser({ id }))

			return Promise.all(promises)
		}
	}
}
</script>
