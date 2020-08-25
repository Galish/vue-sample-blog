<template>
	<div
		v-if="users"
		class="ui stackable grid"
	>
		<user-card
			v-for="(user, index) in users"
			:key="user.id"
			:index="index"
			:user="user"
		/>
	</div>

	<div
		v-else
		class="ui stackable grid"
	>
		<div
			v-for="index in skeletonsCount"
			:key="index"
			class="eight wide computer column"
		>
			<user-skeleton />
		</div>
	</div>
</template>

<script>
import UserCard from './User'
import UserSkeleton from './UserSkeleton'

export default {
	name: 'UsersList',
	components: {
		UserCard,
		UserSkeleton
	},
	props: {
		users: {
			type: [ Array ],
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
