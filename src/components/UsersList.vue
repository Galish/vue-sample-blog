<template>
	<div class="ui stackable grid">
		<User
			v-for="(user, index) in users"
			:key="user.id"
			:index="index"
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
