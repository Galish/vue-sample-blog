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
import { postsWithAuthorsMixin } from '@/mixins'

const PAGE_SIZE = 12

export default {
	name: 'FeedView',
	components: {
		PageNavigation,
		PostList
	},
	mixins: [ postsWithAuthorsMixin ],
	computed: mapGetters([ 'posts', 'postsTotalCount' ]),
	created() {
		this.PAGE_SIZE = PAGE_SIZE
	},
	beforeDestroy() {
		this.clearPosts()
	},
	methods: {
		...mapActions([ 'fetchPosts', 'clearPosts' ]),
		fetchData(page = 1) {
			this.fetchPosts({ limit: this.PAGE_SIZE, page })
		}
	}
}
</script>
