<template>
	<navigation
		:page-size="PAGE_SIZE"
		:total-count="usersTotalCount"
		@fetchData="fetchData"
	>
		<users-list
			:users="users"
		/>
	</navigation>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navigation from '@/components/Navigation.vue'
import UsersList from '@/components/UsersList.vue'

const PAGE_SIZE = 6

export default {
	name: 'UsersView',
	components: {
		Navigation,
		UsersList
	},
	computed: mapGetters([ 'users', 'usersTotalCount' ]),
	created() {
		this.PAGE_SIZE = PAGE_SIZE
	},
	beforeDestroy() {
		this.clearUsers()
	},
	methods: {
		...mapActions([ 'fetchUsers', 'clearUsers' ]),
		fetchData(page = 1) {
			this.fetchUsers({ limit: this.PAGE_SIZE, page })
		}
	}
}
</script>
