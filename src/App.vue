<template>
	<div class="ui container">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>

		<UsersList
			:users="users"
		/>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import UsersList from './components/UsersList.vue'

export default {
	name: 'App',
	components: {
		UsersList
	},
	computed: mapGetters([ 'users' ]),
	created() {
		this.fetchUsers()
	},
	methods: mapActions([ 'fetchUsers' ])
}
</script>

<style>

</style>
