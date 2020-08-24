<template>
	<div class="ui container">
		<img
			alt="Vue logo"
			src="@/assets/logo.png"
		>

		<UsersList
			:users="users"
		/>

		<Navigation
			:activePage="activePage"
			:totalCount="usersTotalCount"
			:pageSize="PAGE_SIZE"
			@select="onPageSelect"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navigation from '@/components/Navigation.vue'
import UsersList from '@/components/UsersList.vue'

const PAGE_SIZE = 6

export default {
	name: 'App',
	components: {
		Navigation,
		UsersList
	},
	data() {
		return {
			activePage: 1
		}
	},
	computed: mapGetters([ 'users', 'usersTotalCount' ]),
	watch: {
		activePage(page) {
			this.fetchUsersPage(page)
		}
	},
	created() {
		this.PAGE_SIZE = PAGE_SIZE
		this.fetchUsersPage()
	},
	methods: {
		...mapActions([ 'fetchUsers' ]),
		fetchUsersPage(page = 1) {
			this.fetchUsers({ limit: PAGE_SIZE, page })
		},
		onPageSelect(activePage) {
			this.activePage = activePage
		}
	}
}
</script>
