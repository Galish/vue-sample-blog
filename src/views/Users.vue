<template>
	<layout>
		<navigation
			:page-size="PAGE_SIZE"
			:total-count="usersTotalCount"
			@fetchData="fetchData"
		>
			<users-list
				:users="users"
			/>
		</navigation>

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
	computed: mapGetters([ 'users', 'usersTotalCount' ]),
	created() {
		this.PAGE_SIZE = PAGE_SIZE
	},
	methods: {
		...mapActions([ 'fetchUsers' ]),
		fetchData(page = 1) {
			this.fetchUsers({ limit: this.PAGE_SIZE, page })
		}
	}
}
</script>
