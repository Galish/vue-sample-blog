<template>
	<PostDetail
		v-if="post"
		v-bind="post"
	/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PostDetail from '@/components/PostDetail'

export default {
	name: 'PostView',
	components: {
		PostDetail
	},
	computed: mapGetters([ 'post' ] ),
	created() {
		this.fetchPost(this.$route.params.id)
	},
	beforeDestroy() {
		this.clearPost()
	},
	methods: mapActions([ 'clearPost', 'fetchPost' ])
}
</script>
