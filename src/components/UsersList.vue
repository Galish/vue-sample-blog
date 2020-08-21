<template>
	<div class="ui items">
		<User
			v-for="user in users"
			:key="user.id"
			:user="user"
		/>
	</div>
</template>

<script>
import User from './User'

export default {
	name: 'UsersList',
	components: {
		User,
	},
	props: {
		users: {
			type: Array,
			required: true,
			default() {
				return []
			}
		}
	}
}
</script>

<style scoped>
</style>
