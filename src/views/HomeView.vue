<template>
	<post-list
		:posts="postsWithAutorData"
		:skeletonsCount="PAGE_SIZE"
		view="short"
	>
		<h1 class="ui header">
			Welcome to our dummy blog!
		</h1>

		<p>
			The application implemented using <a
				target="_blank"
				href="https://vuejs.org/"
			>Vue.js</a> JavaScript Framework.
		</p>

		<p>
			Styling done with <a
				target="_blank"
				href="https://semantic-ui.com/"
			>Semantic UI</a> CSS framework.
		</p>
	</post-list>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PostList from '@/components/PostList.vue'
import { postsWithAuthorsMixin } from '@/mixins'

const PAGE_SIZE = 6

export default {
	name: 'HomeView',
	components: {
		PostList
	},
	mixins: [ postsWithAuthorsMixin ],
	computed: mapGetters([ 'posts', 'postsTotalCount' ]),
	created() {
		this.PAGE_SIZE = PAGE_SIZE
		this.fetchData()
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
