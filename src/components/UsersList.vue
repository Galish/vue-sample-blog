<template>
	<div
		v-if="users"
		class="ui stackable grid"
	>
		<user-card
			v-for="(user, index) in users"
			:key="user.id"
			:index="index"
			v-bind="user"
		/>
	</div>

	<div
		v-else
		class="ui stackable grid"
	>
		<user-skeleton
			v-for="index in skeletonsCount"
			:key="index"
		/>
	</div>
</template>

<script>
import UserCard from './UserCard'
import UserSkeleton from './UserSkeleton'

export default {
	name: 'UsersList',
	components: {
		UserCard,
		UserSkeleton
	},
	props: {
		users: {
			type: Array,
			default() {
				return []
			}
		},
		skeletonsCount: {
			type: Number,
			default: 5
		}
	}
}
</script>

<style scoped>
</style>
