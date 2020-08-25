<template>
	<layout>
		<users-list
			:users="users"
		/>

		<navigation
			:active-page="activePage"
			:total-count="usersTotalCount"
			:page-size="PAGE_SIZE"
			@select="onPageSelect"
		/>

		<template v-slot:footer>
			&copy; 2020 Some footer text
		</template>
	</layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Layout from '@/components/Layout.vue'
import Navigation from '@/components/Navigation.vue'
import UsersList from '@/components/UsersList.vue'

const PAGE_SIZE = 6

export default {
	name: 'App',
	components: {
		Layout,
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
