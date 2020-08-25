<template>
	<div class="ui container">
		<Header />

		<UsersList
			:users="users"
		/>

		<Navigation
			:active-page="activePage"
			:total-count="usersTotalCount"
			:page-size="PAGE_SIZE"
			@select="onPageSelect"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import UsersList from '@/components/UsersList.vue'

const PAGE_SIZE = 6

export default {
	name: 'App',
	components: {
		Header,
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
