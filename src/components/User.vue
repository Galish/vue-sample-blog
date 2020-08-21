<template>
	<div class="item">
		<div class="image">
			<img src="https://semantic-ui.com/images/avatar/large/stevie.jpg">
		</div>
		<div class="content">
			<div class="header">
				{{ user.name }}
			</div>

			<div class="meta">
				<span>{{ user.company.name }}</span>
			</div>
			<div class="description">
				{{ user.phone }}
			</div>
			<div class="extra">
				<p>{{ user.email }}</p>
				<p>{{ user.website }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'User',
	props: {
		user: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
</style>
